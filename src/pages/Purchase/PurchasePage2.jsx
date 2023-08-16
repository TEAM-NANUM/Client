import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../../styles/Purchase/Purchase.css";
import SubHeader from "../../components/SubHeader";
import PurchaseInfo2 from "../../components/Purchase/PurchaseInfo2";
import Footer from "../../components/Footer/Footer";

const PurchasePage2 = ({ PROXY, userData }) => {
    const [userInfo, setUserInfo] = useState(null);
    const location = useLocation();
    const state = location.state;
    const shoppingCart = state.shoppingCart;

    useEffect(() => {
        axios.get(`${PROXY}/api/orders/user`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
        })
            .then((res) => {
                setUserInfo(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="PurchasePage_container">
            <SubHeader page={'주문하기'}></SubHeader>
            <PurchaseInfo2 PROXY={PROXY} userInfo={userInfo} shoppingCart={shoppingCart}></PurchaseInfo2>
            <Footer></Footer>
        </div>
    );
};

export default PurchasePage2;