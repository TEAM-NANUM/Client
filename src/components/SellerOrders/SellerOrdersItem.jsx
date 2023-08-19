import React, { useEffect } from "react";
import "../../styles/SellerOrders/SellerOrdersItem.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SellerOrdersItem = ({ item, datas, PROXY }) => {
  const navigate = useNavigate();

  const onProgress = () => {
    if (item.delivery_status === "PAYMENT_COMPLETE") {
      axios
        .patch(
          `${PROXY}/api/seller/order/${item.id}`,
          {
            delivery_status: "IN_PROGRESS",
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        )
        .then((res) => alert('배송 상태를 "배송중" 으로 바꿉니다.'))
        .then((res) => navigate("/sellerMyPage"))
        .catch((err) => console.log(err));
    } else {
      if (item.delivery_status === "DELIVERED") {
        alert("이미 배송중 단계를 지난 상품입니다.");
      } else {
        alert("이미 배송중인 주문입니다.");
      }
    }
  };

  const onDelivered = () => {
    if (item.delivery_status === "IN_PROGRESS") {
      axios
        .patch(
          `${PROXY}/api/seller/order/${item.id}`,
          {
            delivery_status: "DELIVERED",
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        )
        .then((res) => alert('배송 상태를 "배송 완료" 로 바꿉니다.'))
        .then((res) => navigate("/sellerMyPage"))
        .catch((err) => console.log(err));
    } else {
      if (item.delivery_status === "DELIVERED") {
        alert("이미 배송이 완료된 주문입니다.");
      } else {
        alert("배송 절차 및 상태를 다시 한 번 확인 해주세요.");
      }
    }
  };

  return (
    <div className="SellerOrdersItem_container">
      <div className="SellerOrdersItem_info">
        <div className="SellerOrdersItem_img">
          <img src={datas.products.img_url} alt="상품 사진" />
        </div>
        <div className="SellerOrdersItem_content">
          <div className="SellerOrdersItem_header">
            <div className="SellerOrdersItem_To">To. </div>
            <div className="SellerOrdersItem_username">{item.user_name}</div>
          </div>
          <div className="SellerOrdersItem_content_info">
            <span>주문 정보 : </span>
            <div className="SellerOrdersItem_item_info">
              {datas.products.name} {datas.products.unit}kg {item.quantity}개
            </div>
            <span>합계 : </span>
            <div className="SellerOrdersItem_item_totalprice">
              {(datas.products.price * item.quantity).toLocaleString()} 원
            </div>
          </div>
        </div>
      </div>
      <div className="SellerOrdersItem_deliveryState">
        <div
          className={
            item.delivery_status === "PAYMENT_COMPLETE" ||
            item.delivery_status === "IN_PROGRESS" ||
            item.delivery_status === "DELIVERED"
              ? "deliveryState_state_active"
              : "deliveryState_state"
          }
        >
          결제 완료
        </div>
        <div className="deliveryState_arrow">&nbsp; → &nbsp;</div>
        <div
          className={
            item.delivery_status === "IN_PROGRESS" ||
            item.delivery_status === "DELIVERED"
              ? "deliveryState_state_active"
              : "deliveryState_state"
          }
          onClick={onProgress}
        >
          배송중
        </div>
        <div className="deliveryState_arrow">&nbsp; → &nbsp;</div>
        <div
          className={
            item.delivery_status === "DELIVERED"
              ? "deliveryState_state_active"
              : "deliveryState_state"
          }
          onClick={onDelivered}
        >
          배송 완료
        </div>
      </div>
    </div>
  );
};

export default SellerOrdersItem;
