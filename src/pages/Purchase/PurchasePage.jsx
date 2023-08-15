import react, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom"
import axios from "axios";
import "../../styles/Purchase/Purchase.css"
import SubHeader from "../../components/SubHeader";
import PurchaseInfo from "../../components/Purchase/PurchaseInfo";
import Footer from "../../components/Footer/Footer";

const PurchasePage = ({ PROXY, userData }) => {

    const [userInfo, setUserInfo] = useState();
    const { id } = useParams();
    const location = useLocation();
    const state = location.state;
    const quantity = state.quantity;

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
            <PurchaseInfo PROXY={PROXY} userInfo={userInfo} id={id} quantity={quantity}></PurchaseInfo>
            <Footer></Footer>
        </div>
    )
}

export default PurchasePage;