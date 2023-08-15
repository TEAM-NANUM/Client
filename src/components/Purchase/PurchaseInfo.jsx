import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Purchase/PurchaseInfo.css"
import PurchaseUserInfo from "./PurchaseUserInfo";
import Product from "../Product/Product";
import PurchaseCheck from "./PurchaseCheck";

const PurchaseInfo = ({ PROXY, id, userData }) => {
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`${PROXY}/api/products/${id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }, []);

    return (
        <div className="PurchaseInfo_container">
            <PurchaseUserInfo userData={userData}></PurchaseUserInfo>
            <img className={'contour'} src="./img/imgPurchase/contour.png" alt="구분선"></img>
            <div className="ProductInfo">

            </div>
            <img className={'contour'} src="./img/imgPurchase/contour.png" alt="구분선"></img>
            <PurchaseCheck></PurchaseCheck>
            <div className="Purchase_buttom">결제하기</div>
        </div>
    )
}

export default PurchaseInfo;