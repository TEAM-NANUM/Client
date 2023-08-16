import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/Purchase/PurchaseInfo.css"
import PurchaseUserInfo from "./PurchaseUserInfo";
import Product from "../Product/Product";
import PurchaseCheck from "./PurchaseCheck";

const PurchaseInfo = ({ PROXY, userInfo, id, quantity }) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get(`${PROXY}/api/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleSubmit = useCallback(async () => {
        try {
            const accessToken = localStorage.getItem('access_token');
            const requestData = {
                product_id: id,
                quantity: quantity,
                address: {
                    zip_code: userInfo.address.zip_code,
                    default_address: userInfo.address.default_address,
                    detail_address: userInfo.address.detail_address
                }
            };

            if (accessToken) {
                const response = await axios.post(`${PROXY}/api/orders`, requestData, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (response.status === 201) {
                    window.alert("결제완료되었습니다.");
                } else {
                    console.log("주문 등록에 실패하였습니다.");
                    navigate('/point')
                }
            } else {
                console.log("Access token이 없습니다.");
            }
        } catch (error) {
            if (error.response && error.response.status === 402) {
                window.alert("포인트가 부족합니다.");
                console.log(product);
                navigate('/point')
            } else {
                console.log(error);
            }
        }
    }, [id, quantity, userInfo, navigate, PROXY]);

    return (
        <div className="PurchaseInfo_container">
            <PurchaseUserInfo userInfo={userInfo}></PurchaseUserInfo>
            <img className={'contour'} src="../img/imgPurchase/contour.png" alt="구분선"></img>
            <div className="ProductInfo">
                <Product list={product}></Product>
                {product && (
                    <div className="ProductInfo2">
                        <div className="quantity">수량: {quantity}</div>
                        <div className="total_price">총합: {product.price * quantity}</div>
                    </div>
                )}
            </div>
            <img className={'contour'} src="../img/imgPurchase/contour.png" alt="구분선"></img>
            <PurchaseCheck userInfo={userInfo} product={product} quantity={quantity}></PurchaseCheck>
            <div className="Purchase_buttom" onClick={handleSubmit}>결제하기</div>
        </div>
    )
}

export default PurchaseInfo;