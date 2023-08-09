import react from "react";
import "../../styles/Purchase/PurchaseCheck.css";

const PurchaseCheck = () => {
    return (
        <div className="PurchaseCheck_container">
            <div className="PurchaseCheck_top">
                <div className="PurchaseCheck">구매 확인</div>
                <img src="./img/imgPurchase/check_box.png" alt="체크박스아이콘"></img>
            </div>
            <div className="PurchaseCheck_content">
                <div className="Holding_point">
                    <div className="Point_type">보유 포인트</div>
                    <div className="Point">200,000</div>
                </div>
                <div className="Deduction_point">
                    <div className="Point_type">차감 포인트</div>
                    <div className="Point">-100,000</div>
                </div>
                <div className="Remaining_point">
                    <div className="Point_type">잔여 포인트</div>
                    <div className="Point">100,000</div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseCheck;