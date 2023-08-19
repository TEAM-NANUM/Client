import React, { useEffect, useState } from "react";
import axios from "axios";
import SubHeader from "../../components/SubHeader";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "../../styles/Review/ReviewPage.css";
import ReviewTap from "../../components/Review/ReviewTap";
import ReviewAddList from "../../components/Review/ReviewAddList";
import ReviewList from "../../components/Review/ReviewList";

const ReviewPage = ({ PROXY }) => {
  const [review, setReview] = useState();
  const [writtenReview, setWrittenReview] = useState();

  const [tab, setTab] = useState("write", "see");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.hanche.store/api/reviews/delivered`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        setReview(res.data.orders);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate(-1);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.hanche.store/api/reviews/my`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        setWrittenReview(res.data.orders);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("게스트는 리뷰를 작성할 수 없어요");
        navigate(-1);
      });
  }, []);

  return (
    <>
      <SubHeader page={"My 리뷰"} />
      <div className="ShoppingCartPage_top" style={{ cursor: "pointer" }}>
        <div
          style={{
            height: "43px",
            width: "50%",
            display: "flex",
            borderRight: "0.1px solid lightgray",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: tab === "write" ? "" : "#f6f6f6",
          }}
          onClick={() => {
            setTab("write");
          }}
        >
          <p style={{ margin: "auto", padding: 0 }}>리뷰 작성</p>
        </div>
        <div
          style={{
            height: "43px",
            width: "50%",
            display: "flex",
            borderLeft: "0.1px solid lightgray",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: tab === "see" ? "" : "#f6f6f6",
          }}
          onClick={() => {
            setTab("see");
          }}
        >
          <p style={{ margin: "auto", padding: 0 }}>작성한 리뷰</p>
        </div>
      </div>
      {review &&
        writtenReview &&
        (tab === "write" ? (
          <div className="ReviewPage_container">
            {review.map((item, index) => (
              <ReviewAddList
                index={index}
                item={item}
                writtenReview={writtenReview}
              />
            ))}{" "}
            {review.length === 0 ? (
              <p
                style={{
                  fontSize: "12px",
                  color: "gray",
                  display: "flex",
                  marginTop: "40px",
                  justifyContent: "center",
                }}
              >
                작성 할 수 있는 후기가 없어요.
              </p>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="ReviewPage_container">
            {writtenReview.map((item, index) => (
              <>
                <div className="main_review">
                  <span className="main_review_user">{item.name}</span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "360px",
                    }}
                  >
                    <div
                      style={{
                        width: "260px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        marginBottom: "auto",
                      }}
                    >
                      <img
                        style={{
                          marginBottom: "4px",
                          marginTop: "auto",
                          objectFit: "cover",
                          width: "70px",
                        }}
                        src={`./img/imgProduct/${item.rating}.svg`}
                        alt="평점"
                      />
                      <div
                        className="main_review_comment"
                        style={{
                          wordBreak: "break-all",
                          wordWrap: "breakWord",
                        }}
                      >
                        {item.comment}
                      </div>
                    </div>
                    <div>
                      <img
                        style={{
                          objectFit: "cover",
                          borderRadius: "4px ",
                          width: "58px",
                          height: "58px",
                        }}
                        src={item.img_url}
                        alt="평점"
                      />
                    </div>
                  </div>
                </div>
                {index !== writtenReview.length - 1 && (
                  <div
                    style={{
                      margin: "0 0 12px 0",
                      height: "0.1px",
                      backgroundColor: "#e7e7e7",
                    }}
                  ></div>
                )}
              </>
            ))}{" "}
            {writtenReview.length === 0 ? (
              <p
                style={{
                  fontSize: "12px",
                  color: "gray",
                  display: "flex",
                  marginTop: "40px",
                  justifyContent: "center",
                }}
              >
                등록된 후기가 없어요.
              </p>
            ) : (
              ""
            )}
          </div>
        ))}
    </>
  );
};

export default ReviewPage;
