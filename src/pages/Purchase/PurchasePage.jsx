import react from "react";
import { useParams } from 'react-router-dom';
import "../../styles/Purchase/Purchase.css"
import SubHeader from "../../components/SubHeader";
import PurchaseInfo from "../../components/Purchase/PurchaseInfo";
import Footer from "../../components/Footer/Footer";

const PurchasePage = ({ PROXY, userData }) => {
    const { id } = useParams();

    return (
        <div className="PurchasePage_container">
            <SubHeader page={'주문하기'}></SubHeader>
            <PurchaseInfo PROXY={PROXY} id={id} userData={userData}></PurchaseInfo>
            <Footer></Footer>
        </div>
    )
}

export default PurchasePage;