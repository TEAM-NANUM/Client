import React from 'react';
import "../../../styles/MyPage/UserPage.css";

const Shopping = ({navigate}) => {

    return (
        <div className='user_shopping'>
            <div className='user_header'>
                <p style={{padding: "0 0 0 16px", fontSize: "16px"}}>나의 쇼핑 정보</p>
            </div>
            <div className='user_shopping_info'>
                <div onClick={() => navigate('/orderlist')}>
                    <p style={{margin: "0", lineHeight: "1.5"}}>주문내역</p>
                    <img style={{marginLeft: "auto"}} src='./img/imgMyPage/rightArrow.svg' alt='화살표' />
                </div>
                <div onClick={() => navigate('/address')}>
                    <p style={{margin: "0", lineHeight: "1.5"}}>배송지 관리</p>
                    <img style={{marginLeft: "auto"}} src='./img/imgMyPage/rightArrow.svg' alt='화살표' />
                </div>
                <div onClick={() => navigate('/group')}>
                    <p style={{margin: "0", lineHeight: "1.5"}}>그룹 관리</p>
                    <img style={{marginLeft: "auto"}} src='./img/imgMyPage/rightArrow.svg' alt='화살표' />
                </div>
                <div onClick={() => navigate('/review')}>
                    <p style={{margin: "0", lineHeight: "1.5"}}>리뷰 작성</p>
                    <img style={{marginLeft: "auto"}} src='./img/imgMyPage/rightArrow.svg' alt='화살표' />
                </div>
            </div>
        </div>
    );
};

export default Shopping;