import React from 'react';
import "../../styles/Point/PointResult.css";

const PointResult = ({point}) => {
    return (
        <div className='PointResult_container'>
            <div className='PointResult_text'>최종 결제 금액</div>
            <div className='PointResult_result'>
                <div>결제 금액</div>
                <div>{point} 원</div>
            </div>
        </div>
    );
};

export default PointResult;