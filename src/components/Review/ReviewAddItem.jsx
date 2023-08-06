import React, { useState } from 'react';
import "../../styles/Review/ReviewAddItem.css";

const ReviewAddItem = ({item}) => {

    const [reviewForm, setReviewForm] = useState();
    const [reviewRating, setReviewRating] = useState();
    const [reviewComment, setReviewComment] = useState("");

    const onRating = (e) => {
        setReviewRating(Number(e.currentTarget.value));
    }

    const onComment = (e) => {
        setReviewComment(e.currentTarget.value);
    }

    const onReviewSummit = () => {
        setReviewForm({
            'order_id' : item.id,
            "rating": reviewRating,
	        "comment": reviewComment 
        })

        if(reviewForm) {
            // 통신 로직 추가하면 됨
            alert("리뷰 작성 완료 !")
            window.location.reload();
        }
    }

    return (
        <div className='ReviewAddItem_container'>
            <div className='ReviewAddItem_contnets'>
                <div className='ReviewAddItem_img'>
                    <img src='./img/imgs/icon_logo.svg' alt='ReviewAddItem 이미지'/>
                </div>
                <div className='ReviewAddItem_formBox'>
                    <div className='ReviewAddItem_itemName'>{item.name}</div>
                    <div className='ReviewAddItem_rating'>
                        <div className='ReviewAddItem_rating_text'>제품을 평가 해주세요.</div>
                        <div className='ReviewAddItem_rating_check'>
                            <div><input type='radio' name={item.id} value='1' onClick={onRating}/>1점</div>
                            <div><input type='radio' name={item.id} value='2' onClick={onRating}/>2점</div>
                            <div><input type='radio' name={item.id} value='3' onClick={onRating}/>3점</div>
                            <div><input type='radio' name={item.id} value='4' onClick={onRating}/>4점</div>
                            <div><input type='radio' name={item.id} value='5' onClick={onRating}/>5점</div>
                        </div>
                    </div>
                    <div className='ReviewAddItem_comment'>
                        <textarea rows="4" cols="23" value={reviewComment} placeholder='리뷰를 작성해주세요.' onChange={onComment} />
                    </div>
                </div>
            </div>
            <div className='ReviewAddItem_addBtn' onClick={onReviewSummit}>리뷰 작성 완료</div>
        </div>
    );
};

export default ReviewAddItem;