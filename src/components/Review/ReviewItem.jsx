import React from 'react';
import "../../styles/Review/ReviewItem.css";

const ReviewItem = ({ item }) => {

    const ratingRender = (rating) => {
        const ratingStar = [];
        for (let i = 1; i <= rating; i++) {
            ratingStar.push(<img src='./img/imgReview/ratingStar.svg' alt='평점' />)
        }
        return ratingStar.map((item) => item);
    }

    return (
        <div className='ReviewItem_container'>
            <div className='ReviewItem_img'>
                <img src={item.img_url} alt='상품 사진' />
            </div>
            <div className='ReviewItem_content'>
                <div className='ReviewItem_name'>{item.name}</div>
                <div className='ReviewItem_rating'>
                    {ratingRender(item.rating)}
                </div>
                <div className='ReviewItem_comment'>{item.comment}</div>
            </div>
        </div>
    );
};

export default ReviewItem;