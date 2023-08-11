import react from "react";
import "../../styles/Purchase/Purchase.css"
import SubHeader from "../../components/SubHeader";
import PurchaseInfo from "../../components/Purchase/PurchaseInfo";
import Footer from "../../components/Footer/Footer";

const PurchasePage = () => {
    return (
        <div className="PurchasePage_container">
            <SubHeader page={'주문하기'}></SubHeader>
            <PurchaseInfo></PurchaseInfo>
            <Footer></Footer>
        </div>
    )
}

export default PurchasePage;