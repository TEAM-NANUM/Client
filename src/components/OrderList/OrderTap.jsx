import React from "react";
import "../../styles/OrderList/OrderTap.css";

const OrderTap = ({ setOrderTap }) => {
  return (
    <div className="OrderTap_container">
      <div className="OrderTap" onClick={() => setOrderTap("progress_orders")}>
        진행중인 주문
      </div>
      <img src="./img/imgOrderList/tapIcon.svg" alt="탭 아이콘" />
      <div className="OrderTap" onClick={() => setOrderTap("complete_orders")}>
        완료된 주문
      </div>
    </div>
  );
};

export default OrderTap;
