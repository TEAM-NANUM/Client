import React, { useEffect, useState } from 'react';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer';
import "../../styles/Review/ReviewPage.css";
import ReviewTap from '../../components/Review/ReviewTap';
import ReviewAddList from '../../components/Review/ReviewAddList';
import ReviewList from '../../components/Review/ReviewList';

const ReviewPage = () => {

    const [reviewTap, setReviewTap] = useState("write done")
    const [review, setReview] = useState({
        "count": 2, //리뷰 달린 주문 개수
        "reviews": [
            {
                "id": 1, //주문 pk
                "name": "강원도 감자", //상품 제목
                "img_url": "string", //상품 대표 이미지
                "rating": 1, //리뷰 별점
                "comment": "썩었어요" //리뷰 텍스트
            },
            {
                "id": 2, 
                "name": "포항 대구",
                "img_url": "string", 
                "rating": 4,
                "comment": "가족들이랑 맛있게 잘 먹고 갑니다" 
            }
        ]
    })

    useEffect(() => {
        (reviewTap === "write") ? setReview({
            "count": 2, //리뷰 작성안된 주문 개수
            "orders": [
                {
                    "id": 1,  //주문 pk
                    "name": "유기농 당근", //상품 제목
                    "img_url": "string" //상품 대표 이미지
                },
                {
                    "id": 2,  //주문 pk
                    "name": "유기농 호박", //상품 제목
                    "img_url": "string" //상품 대표 이미지
                }
            ]
        }) : setReview({
            "count": 2, //리뷰 달린 주문 개수
            "reviews": [
                {
                    "id": 1, //주문 pk
                    "name": "강원도 감자", //상품 제목
                    "img_url": "string", //상품 대표 이미지
                    "rating": 1, //리뷰 별점
                    "comment": "썩었어요" //리뷰 텍스트
                },
                {
                    "id": 2, 
                    "name": "포항 대구",
                    "img_url": "string", 
                    "rating": 4,
                    "comment": "가족들이랑 맛있게 잘 먹고 갑니다" 
                }
            ]
        })
    },[reviewTap])

    return (
        <>
            <SubHeader page={"My 리뷰"} />
            <div className='ReviewPage_container'>
                {review && (reviewTap === "write") ? <ReviewAddList review={review} /> : <ReviewList review={review} />}
            </div>
            <ReviewTap setReviewTap={setReviewTap}/>
            <Footer />
        </>
    );
};

export default ReviewPage;