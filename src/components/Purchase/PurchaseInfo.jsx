import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Purchase/PurchaseInfo.css"
import PurchaseUserInfo from "./PurchaseUserInfo";
import Product from "../Product/Product";
import PurchaseCheck from "./PurchaseCheck";

const PurchaseInfo = ({ PROXY, userInfo, id, quantity }) => {

    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`${PROXY}/api/products/${id}`)
            .then((res) => {
                setProduct(res.data); // product 상태 업데이트
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
    return (
        <div className="PurchaseInfo_container">
            <PurchaseUserInfo userInfo={userInfo}></PurchaseUserInfo>
            <img className={'contour'} src="../img/imgPurchase/contour.png" alt="구분선"></img>
            <div className="ProductInfo">
                <Product list={product}></Product>
                <div className="ProductInfo2">
                    <div className="quantity">수량: {quantity}</div>
                    <div className="total_price">총합: {product.price * quantity}</div>
                </div>
            </div>
            <img className={'contour'} src="../img/imgPurchase/contour.png" alt="구분선"></img>
            <PurchaseCheck userInfo={userInfo} product={product} quantity={quantity}></PurchaseCheck>
            <div className="Purchase_buttom">결제하기</div>
        </div>
    )
}

export default PurchaseInfo;