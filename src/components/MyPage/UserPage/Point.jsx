import React from 'react';
import "../../../styles/MyPage/UserPage.css";

const Point = ({userData, navigate}) => {

    return (
        <div className='user_point'>
            <div className='user_header'>
                <p>포인트 충전</p>
                <img src='./img/imgMyPage/point.svg' alt='포인트 충전'/>
            </div>
            <div className='user_point_info'>
                <p className='user_point_current'>머니 : {userData.point}원</p>
                <div className='user_point_charge' onClick={() => navigate('/point')}>충전하기</div>
            </div>
        </div>
    );
};

export default Point;