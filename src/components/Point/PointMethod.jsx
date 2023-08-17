import React, { useState } from 'react';
import "../../styles/Point/PointMethod.css";

const PointMethod = ({paymentMethod, setPaymentMethod, point, userData}) => {

    return (
        <div className='PointMethod_container'>
            <span style={{fontSize: "17px"}} className="pay_span">
                결제 수단
            </span>

            <div className='PointMethod_method' style={{marginBottom: "40px"}}>
                <div className={paymentMethod === 'kakaopay' ? 'method_active' : 'method'} onClick={(() => setPaymentMethod('kakaopay'))}><img style={{margin: "auto", padding: 0, objectFit: "cover", height: "22px"}} src='./img/imgPoint/kakaoPay.png' alt='카카오페이' ></img></div>
                <div className={paymentMethod === 'tosspay' ? 'method_active' : 'method'} onClick={(() => setPaymentMethod('tosspay'))}><img style={{margin: "auto", padding: 0, objectFit: "cover", height: "15px"}} src='./img/imgPoint/tossPay.png' alt='토스페이' /></div>
                <div className={paymentMethod === 'nice' ? 'method_active' : 'method'} onClick={(() => setPaymentMethod('nice'))}><img style={{margin: "auto", padding: 0, objectFit: "cover", height: "40px"}} src='./img/imgPoint/card.png' alt='신용카드' /></div>
            </div>

            <span style={{fontSize: "17px"}} className="pay_span">
                결제 금액
            </span>
            <div style={{marginTop: "12px", display: "flex", padding: "4px 0",justifyContent:"space-between", borderBottom: "0.5px solid lightgray"}}>
                <p style={{fontWeight: "400", margin: "7px 0", fontSize: "14px", color:"#292929"}}>충전 후 머니</p>
                <p style={{fontWeight: "400", margin: "7px 0", fontSize: "14px", color:"#292929"}}>{(point + userData.point).toLocaleString()}원</p>
            </div>
            <div style={{marginTop: "3px", display: "flex", padding: "4px 0",justifyContent:"space-between"}}>
                <p style={{fontWeight: "600", margin: "7px 0", fontSize: "14px", color:"#292929"}}>최종 결재 금액</p>
                <p style={{fontWeight: "600", margin: "7px 0", fontSize: "14px", color:"#292929"}}>{point.toLocaleString()}원</p>
            </div>
        </div>
    );
};

export default PointMethod;