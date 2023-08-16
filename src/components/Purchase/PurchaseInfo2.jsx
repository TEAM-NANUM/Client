import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Purchase/PurchaseInfo.css"
import PurchaseUserInfo from "./PurchaseUserInfo";
import Product from "../Product/Product";
import PurchaseCheck2 from "./PurchaseCheck2";

const PurchaseInfo2 = ({ PROXY, userInfo, shoppingCart }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {

                const productPromises = shoppingCart.map(cartItem =>
                    axios.get(`${PROXY}/api/products/${cartItem.productId}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                        }
                    })
                );

                const productResponses = await Promise.all(productPromises);
                const productData = productResponses.map(res => res.data);
                setProducts(productData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, [PROXY, shoppingCart]);

    return (
        <div className="PurchaseInfo_container">
            <PurchaseUserInfo userInfo={userInfo}></PurchaseUserInfo>
            <img className={'contour'} src="../img/imgPurchase/contour.png" alt="구분선"></img>
            <div className="ProductInfo">
                {products.map((product, index) => (
                    <Product key={index} list={product}></Product>
                ))}
            </div>
            <img className={'contour'} src="../img/imgPurchase/contour.png" alt="구분선"></img>
            <PurchaseCheck2 userInfo={userInfo} shoppingCart={shoppingCart}></PurchaseCheck2>
            <div className="Purchase_buttom">결제하기</div>
        </div>
    )
}

export default PurchaseInfo2;