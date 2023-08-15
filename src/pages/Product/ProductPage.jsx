import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { debounce } from "lodash";
import axios from "axios";
import "../../styles/Product/ProductPage.css"
import SearchBar from "../../components/Product/SearchBar";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";

const ProductPage = ({ PROXY, appRef }) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [showSortPopup, setShowSortPopup] = useState(false); // 정렬 옵션 팝업 표시 여부
    const [searchParams, setSearchParams]=useSearchParams();

    const [isFirstLoad, setIsFirstLoad] = useState(true); 
    const [infoSearch, setInfoSearch] = useState(true); 
    const [isLoading, setIsLoading ]= useState(false);
     

    const [inputValue, setInputValue] = useState(searchParams.get('q')||"");
    
    const handleInputChange = (event) => {
        setInputValue(event.currentTarget.value);
    };

    useEffect(()=> {
        console.log("update")
        setIsFirstLoad(false);
    },[])

    useEffect(()=>{
        if (!isFirstLoad) {        
            setSearchParams(parms =>
                {
                    parms.set("q", inputValue)
                    return parms;
                }
            )
        }
    }, [inputValue])

    useEffect(() => {
        setIsLoading(true);
        setInfoSearch(true);
        setProduct([])
        const timer = setTimeout(() => {
            if (searchParams.get("category") || searchParams.get("subcategory") || inputValue!=="") {
                setInfoSearch(false);
                axios.get(`${PROXY}/api/products?`
            + `${searchParams.get("sort") !== null ? ("sort="+searchParams.get('sort')+"&") : ""}`
            + `${searchParams.get("category") !== null ? ("category="+searchParams.get('category')+"&") : ""}`
            + `${searchParams.get("subcategory") !== null ? ("subcategory="+searchParams.get('subcategory')+"&") : ""}`
            + `${inputValue !== "" ? ("q="+inputValue+"&") : ""}`)
                .then(res => {
                    setIsLoading(false);
                    appRef.current.scrollIntoView();
                    setProduct(res.data.products)
                })
                .catch(err => {
                    setIsLoading(false);
                    console.error(err);
                });
            } else {
                setIsLoading(false)
                setInfoSearch(true);
            }

        }, 200)
    
        // useEffect의 리턴부에 타이머를 해제시킨다.(클린업)
        return () => clearTimeout(timer)

    }, [searchParams]);
    
    const handleSortToggle = () => {
        setShowSortPopup(!showSortPopup);
    };

    return (
        <>
            <SearchBar PROXY={PROXY} inputValue={inputValue} handleInputChange={handleInputChange}></SearchBar>
            <div className='ProductPage_top'>
                <div>
                    <div className='prod_category_select_btn' onClick={()=>{navigate("/category")}}>{searchParams.get('name') || "카테고리"}</div>
                </div>
                <div className='product_sort_btn' onClick={handleSortToggle}>{

                    searchParams.get('sort')==="recent"?"최신순":searchParams.get('sort')==="popular"?"인기순":searchParams.get('sort')==="review"?"후기순":searchParams.get('sort')==="rating"?"평점순":"최신순"

                }
                    <img src={`./img/imgProduct/sortDrop${showSortPopup?"On":"Off"}.svg`} alt='Back'  />
                </div>
                {showSortPopup && (
                    <div style={{ position: 'absolute',top: "37px", left: "315px" ,width: "55px",background: 'white', border: '1px solid lightgray', padding: '4px 3px', fontSize: "14px"}}>
                        <div className="drop_inner" style={{cursor: "pointer", color: searchParams.get('sort') === null || searchParams.get('sort') === 'recent' ? "#2a2a2a":"lightgray"}}
                            onClick={() => setSearchParams(parms =>
                                {
                                    parms.set("sort", "recent")
                                    return parms;
                                })}>최신순</div>

                        <div className="drop_inner" style={{cursor: "pointer", color: searchParams.get('sort') === 'popular' ? "#2a2a2a":"lightgray"}}
                            onClick={() => setSearchParams(parms =>
                                {
                                    parms.set("sort", "popular")
                                    return parms;
                                })}>인기순</div>

                        <div className="drop_inner" style={{cursor: "pointer", color: searchParams.get('sort') === 'review' ? "#2a2a2a":"lightgray"}}
                            onClick={() => setSearchParams(parms =>
                                {
                                    parms.set("sort", "review")
                                    return parms;
                                })}>후기순</div>
                                
                        <div className="drop_inner" style={{cursor: "pointer", color: searchParams.get('sort') === 'rating' ? "#2a2a2a":"lightgray"}}
                            onClick={() => setSearchParams(parms =>
                                {
                                    parms.set("sort", "rating")
                                    return parms;
                                })}>평점순</div>
                        </div>
                )}
            </div>
            {product && <div className='Product_list'>
                {!isLoading && infoSearch ? <div style={{display: "flex", width: "100%"}}><img style={{margin: "40px auto 0 auto", }} src={`./img/imgProduct/pleaseSearch.svg`} alt='검색해주세요'  /></div>: ""}
                {!isLoading && product.length === 0 && !infoSearch ?  <div style={{display: "flex", width: "100%"}}><p style={{margin: "40px auto 0 auto", color: "#707070"}}>'{inputValue}'에 대한 검색 결과가 없습니다.</p></div> : ""}
                {!infoSearch && product.map((list, idx) =>
                        <>
                            <div className='prod_list_divider' />
                            <div onClick={() => navigate(`/productDetail/${list.id}`)}>
                                <Product list={list}></Product>
                            </div>
                        </>
                    )}
            </div>}
            <Footer></Footer>
        </>
    );
};

export default ProductPage;
