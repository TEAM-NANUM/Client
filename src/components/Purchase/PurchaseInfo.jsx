import react from "react";
import "../../styles/Purchase/PurchaseInfo.css"
import PurchaseUserInfo from "./PurchaseUserInfo";
import Product from "../Product/Product";
import PurchaseCheck from "./PurchaseCheck";
const PurchaseInfo = () => {
    return (
        <div className="PurchaseInfo_container">
            <PurchaseUserInfo></PurchaseUserInfo>
            <img className={'contour'} src="./img/imgPurchase/contour.png" alt="구분선"></img>
            <div className="ProductInfo">
                <Product></Product>
            </div>
            <img className={'contour'} src="./img/imgPurchase/contour.png" alt="구분선"></img>
            <PurchaseCheck></PurchaseCheck>
            <div className="Purchase_buttom">결제하기</div>
        </div>
    )
}

export default PurchaseInfo;