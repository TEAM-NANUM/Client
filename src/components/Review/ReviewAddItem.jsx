import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../styles/Review/ReviewAddItem.css";

const ReviewAddItem = ({ PROXY, item }) => {

    const [reviewForm, setReviewForm] = useState({
        'order_id': item.id,
        "rating": "",
        "comment": ""
    });

    const [reviewRating, setReviewRating] = useState();
    const [reviewComment, setReviewComment] = useState("");

    const onRating = (e) => {
        setReviewRating(Number(e.currentTarget.value));
    }

    const onComment = (e) => {
        setReviewComment(e.currentTarget.value);
    }

    const onReviewSummit = async () => {
        try {
            const accessToken = localStorage.getItem('access_token');
            const requestData = {
                order_id: item.id,
                rating: reviewRating,
                comment: reviewComment
            };

            if (accessToken) {
                await axios.post(`${PROXY}/api/reviews`, requestData, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                onReviewAdd();
            } else {
                console.log("Access token이 없습니다.");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const onReviewAdd = () => {
        if (reviewForm.rating) {
            alert("리뷰 작성 완료 !")
        } else {
            alert("평점을 입력 해주세요.")
        }
    }

    return (
        <div className='ReviewAddItem_container'>
            <div className='ReviewAddItem_contnets'>
                <div className='ReviewAddItem_img'>
                    <img src='./img/imgs/icon_logo.svg' alt='ReviewAddItem 이미지' />
                </div>
                <div className='ReviewAddItem_formBox'>
                    <div className='ReviewAddItem_itemName'>{item.name}</div>
                    <div className='ReviewAddItem_rating'>
                        <div className='ReviewAddItem_rating_text'>제품을 평가 해주세요.</div>
                        <div className='ReviewAddItem_rating_check'>
                            <div><input type='radio' name={item.id} value='1' onClick={onRating} />1점</div>
                            <div><input type='radio' name={item.id} value='2' onClick={onRating} />2점</div>
                            <div><input type='radio' name={item.id} value='3' onClick={onRating} />3점</div>
                            <div><input type='radio' name={item.id} value='4' onClick={onRating} />4점</div>
                            <div><input type='radio' name={item.id} value='5' onClick={onRating} />5점</div>
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