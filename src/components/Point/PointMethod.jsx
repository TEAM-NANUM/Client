import React, { useState } from 'react';
import "../../styles/Point/PointMethod.css";

const PointMethod = ({paymentMethod, setPaymentMethod}) => {

    return (
        <div className='PointMethod_container'>
            <div className='PointMethod_text'>결제 수단</div>
            <div className='PointMethod_method'>
                <div className={paymentMethod === 'nice' ? 'method_active' : 'method'} onClick={(() => setPaymentMethod('nice'))}><img src='./img/imgPoint/card.svg' alt='신용카드' /></div>
                <div className={paymentMethod === 'tosspay' ? 'method_active' : 'method'} onClick={(() => setPaymentMethod('tosspay'))}><img src='./img/imgPoint/tosspay.svg' alt='토스페이' /></div>
                <div className={paymentMethod === 'kakaopay' ? 'method_active' : 'method'} onClick={(() => setPaymentMethod('kakaopay'))}><img src='./img/imgPoint/kakaopay.svg' alt='카카오페이' /></div>
            </div>
        </div>
    );
};

export default PointMethod;