import React from 'react';
import "../../styles/Point/PointForm.css";

const PointForm = ({point, setPoint}) => {
    return (
        <div className='PointForm_container'>
            <div className='PointForm_text'>충전 금액</div>
            <div className='PointForm_box'>
                <img src='./img/imgPoint/point.svg' alt='point' />
                <div className='PointForm_won'>{point} 원</div>
            </div>
            <div className='PointForm_add_box'>
                <div className='PointForm_add' onClick={() => setPoint(idx=>idx + 1000)}>+ 1000 원</div>
                <div className='PointForm_add' onClick={() => setPoint(idx=>idx + 5000)}>+ 5000 원</div>
                <div className='PointForm_add' onClick={() => setPoint(idx=>(idx > 0) ? idx - 1000 : idx)}>- 1000 원</div>
            </div>
        </div>
    );
};

export default PointForm;