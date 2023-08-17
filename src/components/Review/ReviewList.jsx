import React from 'react';
import "../../styles/Review/ReviewList.css";
import ReviewItem from './ReviewItem';

const ReviewList = ({ review }) => {
    return (
        <div className='ReviewList_container'>
            <div className='ReviewList_header'>
                <p>작성한 리뷰 ({review.length})</p>
                <img src='./img/imgReview/ReviewList.svg' alt='작성된 리뷰' />
            </div>
            {review.orders && review.orders.map((item) => (
                <ReviewItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ReviewList;