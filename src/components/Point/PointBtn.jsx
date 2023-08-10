import React from 'react';
import "../../styles/Point/PointBtn.css";
import { useNavigate } from 'react-router-dom';

const PointBtn = ({point}) => {

    const navigate = useNavigate();

    const onPointCharge = () => {
        alert(`${point} 포인트가 충전 됐습니다.`)
        navigate("/mypage");
    }

    return (
        <div className='PointBtn_container' onClick={onPointCharge}>
            충전하기
        </div>
    );
};

export default PointBtn;