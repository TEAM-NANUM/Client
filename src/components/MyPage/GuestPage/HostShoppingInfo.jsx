import React from 'react';
import "../../../styles/MyPage/GuestPage/HostShoppingInfo.css";

const HostShoppingInfo = ({navigate}) => {
    return (
        <div className='guest_shopping'>
            <div className='guest_header'>
                <p>호스트 쇼핑 정보</p>
                <img src='./img/imgMyPage/shoppinginfo.svg' alt='나의 쇼핑 정보'/>
            </div>
            <div className='guest_shopping_info'>
                <span onClick={() => navigate('/orderlist')}>주문내역</span>
                <span id='guest_only_view'>보기 전용</span>
            </div>
        </div>
    );
};

export default HostShoppingInfo;