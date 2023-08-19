import React from "react";
import "../../styles/SellerAccount/SellerJoin.css";
import SellerJoinForm from "../../components/SellerAccount/SellerJoinForm";

const SellerJoin = ({ PROXY }) => {
  return (
    <div className="SellerJoin_container">
      <img src="./img/imgSellerAccount/join_text.svg" alt="비지니스 시작" />
      <SellerJoinForm PROXY={PROXY} />
    </div>
  );
};

export default SellerJoin;
