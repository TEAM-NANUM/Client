import React from 'react';

const Point = ({userData, navigate}) => {
    const formattedPoint = userData.point.toLocaleString();

    return (
        <div className='user_point'>
            <div className='user_header'>
                <p style={{padding: "0 0 0 16px", fontSize: "16px"}} >공유 지갑</p>
            </div>
            <div className='user_point_info'>
                <p className='user_point_current'>잔액 {formattedPoint}원</p>
            </div>
        </div>
    );
};

export default Point;