import React from "react";
import "../../styles/Purchase/PurchaseCheck.css";

const PurchaseCheck2 = ({ userInfo, shoppingCart }) => {

    const cartTotalPrice = shoppingCart.reduce((total, cartItem) => {
        return total + cartItem.quantity * cartItem.totalPrice;
    }, 0);

    return (
        <div className="PurchaseCheck_container">
            <div className="PurchaseCheck_top">
                <div className="PurchaseCheck">구매 확인</div>
                <img src="../img/imgPurchase/check_box.png" alt="체크박스아이콘"></img>
            </div>
            <div className="PurchaseCheck_content">
                <div className="Holding_point">
                    <div className="Point_type">보유 포인트</div>
                    {userInfo && <div className="Point">{userInfo.point}</div>}
                </div>
                <div className="Deduction_point">
                    <div className="Point_type">차감 포인트</div>
                    {shoppingCart && <div className="Point">-{cartTotalPrice}</div>}
                </div>
                <div className="Remaining_point">
                    <div className="Point_type">잔여 포인트</div>
                    {shoppingCart && userInfo && <div className="Point">{userInfo.point - cartTotalPrice}</div>}
                </div>
            </div>
        </div>
    );
};

export default PurchaseCheck2;