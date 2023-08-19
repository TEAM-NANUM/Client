import React from "react";
import "../../styles/SellerMyPage/SellerProfil.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SellerProfil = ({ PROXY, sellerData }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    axios
      .post(
        `${PROXY}/api/user/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((res) => localStorage.clear())
      .then((res) => navigate("/sellerlogin"))
      .catch((err) => console.log(err));
  };

  const formattedPoint = sellerData.point.toLocaleString();

  return (
    <div className="SellerProfil_container">
      <div className="seller_header">판매자 계정</div>
      <div className="seller_name_logout">
        <div className="seller_name">{sellerData.user_name}님 안녕하세요!</div>
        <div className="seller_logout" onClick={onLogout}>
          로그아웃
        </div>
      </div>
      <div className="seller_point">정산 예정 금액 : {formattedPoint} 원</div>
    </div>
  );
};

export default SellerProfil;
