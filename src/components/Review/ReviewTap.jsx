import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Review/ReviewTap.css";

const ReviewTap = ({ setReviewTap }) => {
    const navigate = useNavigate();
    return (
        <div className='ReviewTap_container'>
            <div className='ReviewTap' onClick={() => setReviewTap("write done")}>작성한 리뷰</div>
            <img src='./img/imgOrderList/tapIcon.svg' alt='탭 아이콘' />
            <div className='ReviewTap' onClick={() => setReviewTap("write")}>리뷰 작성</div>
        </div>
    );
};

export default ReviewTap;