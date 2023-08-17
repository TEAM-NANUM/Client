import React from 'react';
import "../../styles/Review/ReviewAddList.css";
import ReviewAddItem from './ReviewAddItem';

const ReviewAddList = ({ PROXY, review }) => {
    return (
        <div className='ReviewAddList_container'>
            <div className='ReviewAddList_header'>
                <p>리뷰 작성하기 ({review.orders.length})</p>
                <img src='./img/imgReview/ReviewAddList.svg' alt='작성된 리뷰' />
            </div>
            {review.orders && review.orders.map((item, idx) => (
                <ReviewAddItem key={idx} PROXY={PROXY} item={item} />
            ))}
        </div>
    );
};

export default ReviewAddList;