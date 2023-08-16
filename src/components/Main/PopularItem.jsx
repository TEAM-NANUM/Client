import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/Main/PopularItem.css";

const PopularItem = ({ PROXY }) => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [searchOpt, setSearchOpt] = useState("popular");

    useEffect(() => {
        axios
            .get(`${PROXY}/api/products`, {
                params: {
                    sort: searchOpt,
                    limit: 6,
                },
            })
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [PROXY, searchOpt])


    return (
        <>
            <div className="pop_header">
                <div className="pop_header_txt">
                    <span className="pop_span">
                        오늘의 장보기, 이런건 어때요?    
                    </span>
                </div>
            </div>
            <div className="pop_opt_container">
                <div className={`pop_opt_btn ${searchOpt === "popular" ? "pop_opt_selected" : ""}`} onClick={()=>{setSearchOpt("popular")}}>인기순</div>
                <div className={`pop_opt_btn ${searchOpt === "rating" ? "pop_opt_selected" : ""}`} onClick={()=>{setSearchOpt("rating")}}>평점순</div>
            </div>
            <div className="PopularItem_list">
                {products.map(product => (
                    <div className="main_prod_wrapper" key={product.id}  onClick={() => { navigate(`/productDetail/${product.id}`) }}>
                        <div className="main_prod_container">
                            <img style={{borderRadius: "4px", objectFit: "cover", width: "113px", height: "111.3px"}} src={product.imgUrl} alt={product.name} />
                            <div className="pop_img_des">
                                <span className="pop_span">
                                    <div className="pop_seller">{product.seller}</div>
                                </span>
                                <span className="pop_title_span">
                                    <div className="pop_title">{product.name}</div>
                                </span>
                                <span className="pop_price">{product.price.toLocaleString()}원</span>
                                <span className="pop_rating">평점 {product.ratingAvg}</span>
                                <div className="pop_prod_pack">
                                    {product.deliveryType === 'PACKAGE' ? '택배배송' : '직배송'}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{
                    display: "flex",
                    width: "92%",
                    fontSize: "14px",
                    height: "45px",
                    borderRadius: "11px",
                    backgroundColor: "white",
                    border: "0.5px solid lightgray",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#565656",
                    fontWeight: "600",
                    cursor: "pointer",
                    margin: "12px auto auto auto"
                }}
                 onClick={()=>{navigate(`/search?q=+&sort=${searchOpt}`)}}
                 >더 많은 상품 보러가기
                 <img style={{objectFit:"cover", width: "18px", height: "18px"}} src="./img/imgMyPage/rightArrow.svg" alt="더 많은 상품"/>
            </div>
        </>
    );
};

export default PopularItem;