import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/ShoppingCart/ShoppingCartPage.css";
import SubHeader from "../../components/SubHeader";
import ShoppingCartList from "../../components/ShoppingCart/ShoppingCartList";
import { useLocation, useNavigate } from 'react-router-dom';
import ShoppingCartSelect from "../../components/ShoppingCart/ShoppingCartSelect";

const ShoppingCartPage = ({ PROXY }) => {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [isCartLoading, setIsCartLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setIsCartLoading(true);
        axios.get(`${PROXY}/api/cart`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        })
            .then((res) => {
                setShoppingCart(res.data.items);
                setIsCartLoading(false);
            })
            .catch((err) => {console.log(err); setIsCartLoading(false)});
    }, []); 

    const handleSelectDelete = async () => {

        axios.post(`${PROXY}/api/cart/delete`, {
            item_ids: selectedItems,
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            }
        }).then((res) => {setShoppingCart(res.data.items); setSelectedItems([])})
        .catch((err) => console.log(err))    
    };

    const handleToggleSelect = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(item => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    return (
        <>
            <SubHeader page={'장바구니'}></SubHeader>
            {
                !isCartLoading && (shoppingCart.length !== 0 ? <div className='ShoppingCartPage_top'>
                        <div className='ShoppingCartPage_top_right'>
                            <img style={{marginLeft: "13px", cursor:"pointer"}} src={`./img/imgs/cartSelect${ selectedItems.length === shoppingCart.length ?"On":"Off"}Icon.svg`} alt='select' 
                                onClick={() => {
                                    if (selectedItems.length === shoppingCart.length) {
                                        setSelectedItems([]);
                                    } else {
                                        setSelectedItems(shoppingCart.map(item => item.id));
                                    }
                                    }} />
                            <p style={{lineHeight: "1.5",fontSize: "15px", margin: "0 0 0 8px", fontWeight: "400", color: "#363636"}}>전체{" "}
                                <span style={{fontSize: "15px", margin: 0, fontWeight: "500"}}>{ shoppingCart === null ? 0 : shoppingCart.length}</span>
                                개
                            </p>
                        </div>
                        <div className='ShoppingCartPage_top_right'>
                            {
                                selectedItems.length !== 0 ? 
                                <p style={{cursor:"pointer", lineHeight: "1.5",fontSize: "13px", margin: "0 13px 0 0", fontWeight: "500", color: "#181818"}}  onClick={handleSelectDelete}>
                                    선택 삭제
                                </p> : ""
                            }
                        </div>
                </div> : 
                <div className="cart_no_item">
                    <img src="./img/imgShoppingCart/noCart.svg" alt='no-cart' />
                    <p style={{marginTop: "15px"}}>장바구니에</p>
                    <p>담긴 상품이 없어요.</p>
                    <div className="redirect_to_home" onClick={()=>navigate("/")}>쇼핑하러 가기</div>
                </div>)
            }
            <div className="ShoppingCartList">
                {shoppingCart &&
                    shoppingCart.map((item, index) => (
                        <>
                            <div className="divider"/>
                            <ShoppingCartList
                                key={item.id}
                                PROXY={PROXY}
                                shoppingCart={item}
                                setShoppingCart={setShoppingCart}
                                isSelected={selectedItems.includes(item.id)}
                                handleToggleSelect={handleToggleSelect}
                                setSelectedItems={setSelectedItems}
                            ></ShoppingCartList>
                        </>

                    ))}
            </div>
            {
                shoppingCart.length !== 0 ? 
                    <ShoppingCartSelect PROXY={PROXY} selectedItems={selectedItems} shoppingCart={shoppingCart}/>
                    : ""    
            }
        </>
    )
}

export default ShoppingCartPage;