import React from 'react';
import "../../styles/Review/ReviewAddList.css";
import ReviewAddItem from './ReviewAddItem';

const ReviewAddList = ({review}) => {
    return (
        <div className='ReviewAddList_container'>
            <div className='ReviewAddList_header'>
                <p>리뷰 작성하기 ({review.count})</p>
                <img src='./img/imgReview/ReviewAddList.svg' alt='작성된 리뷰'/>
            </div>
            {review.orders && review.orders.map((item, key) => <ReviewAddItem key={key} item={item} />)}
        </div>
    );
};

export default ReviewAddList;