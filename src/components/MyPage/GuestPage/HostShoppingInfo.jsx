import React from "react";

const HostShoppingInfo = ({ navigate }) => {
  return (
    <div className="user_shopping">
      <div className="user_header">
        <p style={{ padding: "0 0 0 16px", fontSize: "16px" }}>
          나의 쇼핑 정보
        </p>
      </div>
      <div className="user_shopping_info">
        <div onClick={() => navigate("/orderlist")}>
          <p style={{ margin: "0", lineHeight: "1.5" }}>주문내역</p>
          <img
            style={{ marginLeft: "auto" }}
            src="./img/imgMyPage/rightArrow.svg"
            alt="화살표"
          />
        </div>
      </div>
    </div>
  );
};

export default HostShoppingInfo;
