import React from 'react';
import "../../../styles/MyPage/GuestPage/Point.css";

const Point = ({userData, navigate}) => {
    return (
        <div className='guest_point'>
            <div className='guest_header'>
                <p>포인트 충전</p>
                <img src='./img/imgMyPage/point.svg' alt='포인트 충전'/>
            </div>
            <div className='guest_point_info'>
                <p className='guest_point_current'>머니 : {userData.point} 포인트</p>
            </div>
        </div>
    );
};

export default Point;