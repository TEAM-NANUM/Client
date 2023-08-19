import React, { useState, useEffect, useCallback } from "react";
import { redirect, useParams } from "react-router-dom";
import axios from "axios";
import "../../styles/Product/ProductDetailPage.css";
import { useNavigate } from "react-router-dom";
import ProductDetailMain from "../../components/Product/ProductDetailMain";
import ProductDetailInfo from "../../components/Product/ProductDetailInfo";

const ProductDetailPage = ({ PROXY, setPurchaseDetail }) => {
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setPurchaseDetail(null);
  }, []);

  const [isPurchaseClicked, setIsPurchaseClicked] = useState(false);
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);

  const handleUpdate = (count) => {
    if (purchaseQuantity + count <= 0) {
      return;
    }
    setPurchaseQuantity(purchaseQuantity + count);
  };

  const [infoMsg, setInfoMsg] = useState("");
  const [review, setReview] = useState({ reviews: [] });
  const [product, setProduct] = useState({ product: [] });
  const [cartAddInfo, setCartAddInfo] = useState(false);

  useEffect(() => {
    axios
      .get(`${PROXY}/api/products/${id}/reviews`)
      .then((res) => {
        setReview(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${PROXY}/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleAddCart = useCallback(async () => {
    try {
      await axios({
        method: "post",
        url: `${PROXY}/api/cart`,
        data: {
          product_id: id,
          quantity: purchaseQuantity,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setCartAddInfo(true);
      setTimeout(() => {
        setCartAddInfo(false);
      }, 2400);
    } catch (error) {
      window.location.replace("/");
    }
  }, [purchaseQuantity]);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setInfoMsg("공유 링크가 복사되었습니다!");
      setTimeout(() => {
        setInfoMsg("");
      }, 2000);
    } catch (error) {
      alert("초대링크 복사 실패!");
    }
  };

  return (
    <div>
      {cartAddInfo && (
        <div
          style={{
            zIndex: "2000",
            position: "absolute",
            top: "33%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "390px",
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "18px 16px",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "white",
              border: "0.3px solid lightgray",
              borderRadius: "6px",
              fontSize: "14px",
              color: "#5e5e5e",
              fontWeight: "500",
            }}
          >
            <img
              style={{ objectFit: "cover", width: "52px" }}
              src="https://hanche.store/img/imgShoppingCart/noCart.svg"
              alt="no-cart"
            />
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p style={{ margin: 0 }}>장바구니에</p>
              <p style={{ margin: 0 }}>상품이 담겼어요</p>
            </div>
            <div
              style={{
                marginTop: "8px",
                width: "130px",
                height: "40px",
                fontSize: "12px",
              }}
              className="redirect_to_home"
              onClick={() => navigate("/shoppingcart")}
            >
              장바구니 바로가기
            </div>
          </div>
        </div>
      )}
      <div
        className="subHeader_container"
        style={{
          height: "43px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <div id="subHeader_back">
          {
            <img
              style={{ opacity: "0.7" }}
              src="https://hanche.store/img/imgs/back.svg"
              alt="Back"
              onClick={() => {
                navigate(-1);
              }}
            />
          }
        </div>
        <div id="subHeader_back" />
        <div
          style={{
            cursor: "pointer",
            marginLeft: "auto",
            marginRight: "16px",
            display: "flex",
            justifyContent: "space-around",
            width: "100px",
          }}
        >
          <img
            style={{ objectFit: "cover", width: "23px", opacity: "0.7" }}
            src="https://hanche.store/img/imgFooter/search.svg"
            alt="Back"
            onClick={() => {
              navigate("/search");
            }}
          />
          <img
            style={{ objectFit: "cover", width: "23px", opacity: "0.7" }}
            src="https://hanche.store/img/imgFooter/home.svg"
            alt="Back"
            onClick={() => {
              navigate("/main");
            }}
          />
          <img
            style={{ objectFit: "cover", width: "23px", opacity: "0.7" }}
            src="https://hanche.store/img/imgFooter/shoppingCart.svg"
            alt="Back"
            onClick={() => {
              navigate("/shoppingcart");
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <img
          style={{
            margin: "auto",
            objectFit: "cover",
            width: "390px",
            marginTop: "43px",
          }}
          src={product.imgUrl}
          onClick={() => {
            handleCopy(`https://hanche.store/productDetail/${id}`);
          }}
        />
        <ProductDetailMain product={product}></ProductDetailMain>
        <div className="divider" style={{ marginTop: "10px" }}></div>
        <ProductDetailInfo product={product}></ProductDetailInfo>
        <div className="divider" style={{ marginTop: "10px" }}></div>
        <div
          style={{
            marginTop: "8px",
            paddingBottom: "8px",
            borderBottom: "0.1px solid darkgray",
            display: "flex",
            marginBottom: "20px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{ fontSize: "14px", padding: "0 10px", margin: "0" }}
            className="pay_span"
          >
            상품 후기
          </span>
          <div
            className="group_add_btn"
            onClick={() => {
              navigate("/review");
            }}
          >
            리뷰 작성 +
          </div>
        </div>
        {review.reviews.length === 0 && (
          <p
            style={{
              fontSize: "12px",
              color: "gray",
              display: "flex",
              justifyContent: "center",
            }}
          >
            등록된 후기가 없습니다.
          </p>
        )}
        {review.reviews.map((product, index) => (
          <>
            <div className="main_review" style={{ paddingLeft: "10px" }}>
              <span className="main_review_user">{product.username}</span>
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
                  }}
                >
                  <img
                    style={{
                      marginBottom: "4px",
                      marginTop: "auto",
                      objectFit: "cover",
                      width: "70px",
                    }}
                    src={`https://hanche.store/img/imgProduct/${product.rating}.svg`}
                    alt="평점"
                  />
                  <div className="main_review_comment">{product.comment}</div>
                </div>
              </div>
            </div>
            {index !== review.reviews.length - 1 && (
              <div
                style={{
                  margin: "6px 0 22px 0",
                  height: "0.1px",
                  backgroundColor: "#e7e7e7",
                }}
              ></div>
            )}
          </>
        ))}
      </div>

      {/* {isPurchaseClicked ? (
                <ProductSelectPopUp PROXY={PROXY} id={id} product={product} onDeleteClick={handlePurchaseCloseClick}></ProductSelectPopUp>
            ) : isReviewClicked ? (
                <ProductReviewPopUp onDeleteClcik={handleReviewCloseClick} product={product} review={review}></ProductReviewPopUp>
            ) : (
                <Pr PROXY={PROXY} id={id} onPurchaseClick={handlePurchaseClick} onReviewClick={handleReviewClick}></Pr    c
            )} */}

      {!isPurchaseClicked ? (
        <div
          className="ShoppingCartSelect_container"
          style={{ flexDirection: "column", height: infoMsg ? "95px" : "" }}
        >
          {infoMsg && (
            <p
              style={{
                margin: "5px 0 0 0",
                padding: 0,
                fontWeight: "400",
                fontSize: "14px",
                color: "rgb(99, 99, 99)",
              }}
            >
              {infoMsg}
            </p>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "389px",
            }}
          >
            <div
              className="select_purchase"
              style={{
                width: "8%",
                backgroundColor: "white",
                marginLeft: "16px",
              }}
            >
              <img
                style={{ objectFit: "cover", height: "35px" }}
                src="/img/imgs/share.svg"
                onClick={() => {
                  handleCopy(`https://hanche.store/productDetail/${id}`);
                }}
              />
            </div>
            <div
              className="select_purchase"
              style={{ width: "80%", marginRight: "16px" }}
              onClick={() => setIsPurchaseClicked(true)}
            >
              <p>구매하기</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="ShoppingCartSelect_container"
          style={{
            backgroundColor: "#ffffff",
            flexDirection: "column",
            height: "200px",
            justifyContent: "flex-end",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >
          <div
            onClick={() => setIsPurchaseClicked(false)}
            style={{
              cursor: "pointer",
              marginBottom: "auto",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
              width: "389px",
              height: "18px",
              borderBottom: "0.2px solid #e6e6e6",
              backgroundColor: "#fcfcfc",
            }}
          >
            <img
              style={{
                margin: "auto",
                objectFit: "cover",
                width: "14px",
                height: "6px",
              }}
              src="/img/imgs/popClose.svg"
            />
          </div>
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              width: "91%",
              padding: "0 16px",
              alignItems: "center",
            }}
          >
            <div
              style={{ fontWeight: 700, fontSize: "16px", maxWidth: "180px" }}
            >
              {product.name}
            </div>
            <div
              className="pop_prod_pack"
              style={{ height: "20px", margin: "0 0 0 5px" }}
            >
              직배송
            </div>
            <div
              className="quantity_update_bar"
              style={{
                margin: "5px 0 5px auto",
                fontSize: "10px",
                backgroundColor: "white",
              }}
            >
              <img
                src="../img/imgShoppingCart/minus.svg"
                alt="-"
                onClick={() => handleUpdate(-1)}
              />
              <div className="quantity_bar">{purchaseQuantity}</div>
              <img
                src="../img/imgShoppingCart/plus.svg"
                alt="+"
                onClick={() => handleUpdate(1)}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              display: "flex",
              padding: "16px 0",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontWeight: "500",
                margin: "7px 0 7px 16px",
                fontSize: "13px",
                color: "#292929",
              }}
            >
              상품 {purchaseQuantity}개
            </p>
            <p
              style={{
                fontWeight: "600",
                margin: "7px 16px 7px 0",
                fontSize: "13px",
                color: "#272727",
              }}
            >
              {(purchaseQuantity * product.price).toLocaleString()}원
            </p>
          </div>
          <div
            style={{
              borderTop: "0.3px solid lightgray",
              display: "flex",
              padding: "8px 0",
              justifyContent: "space-between",
              width: "389px",
              backgroundColor: "white",
            }}
          >
            <div
              onClick={handleAddCart}
              className="select_purchase"
              style={{
                borderRadius: "5px",
                fontWeight: "500",
                width: "80%",
                marginLeft: "16px",
                marginRight: "8px",
                height: "44px",
                border: "1px solid #FF7A51",
                backgroundColor: "white",
                color: "#FF7A51",
              }}
            >
              <p>장바구니 담기</p>
            </div>
            <div
              onClick={() => {
                setPurchaseDetail([
                  {
                    productId: id,
                    imgUrl: product.imgUrl,
                    name: product.name,
                    price: product.price,
                    quantity: purchaseQuantity,
                  },
                ]);
                navigate("/purchase");
              }}
              className="select_purchase"
              style={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                borderRadius: "5px",
                fontWeight: "500",
                width: "80%",
                marginRight: "16px",
                height: "46px",
              }}
            >
              <p>구매하기</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
