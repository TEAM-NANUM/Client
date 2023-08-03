import React from 'react';
import "../../../styles/MyPage/UserPage.css";

const Shopping = ({navigate}) => {

    return (
        <div className='user_shopping'>
            <div className='user_header'>
                <p>나의 쇼핑 정보</p>
                <img src='./img/imgMyPage/shoppinginfo.svg' alt='나의 쇼핑 정보'/>
            </div>
            <div className='user_shopping_info'>
                <span onClick={() => navigate('/orderlist')}>주문내역</span>
                <span onClick={() => navigate('/address')}>배송지 관리</span>
                <span onClick={() => navigate('/group')}>그룹 관리</span>
                <span onClick={() => navigate('/review')}>리뷰 작성</span>
            </div>
        </div>
    );
};

export default Shopping;