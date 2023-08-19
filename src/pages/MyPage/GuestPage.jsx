import React from "react";
import "../../styles/MyPage/GuestPage/GuestPage.css";
import { useNavigate } from "react-router-dom";
import Profil from "../../components/MyPage/GuestPage/Profil";
import HostShoppingInfo from "../../components/MyPage/GuestPage/HostShoppingInfo";
import Point from "../../components/MyPage/GuestPage/Point";

const GuestPage = ({ userData }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Profil userData={userData} onLogout={onLogout} />
      <div className="divider" />
      <Point userData={userData} navigate={navigate} />
      <div className="divider" />
      <HostShoppingInfo navigate={navigate} />
      <div className="divider" />
      <img src="./img/imgMyPage/guestImg.svg" alt="guest 이미지" />
      <div style={{ display: "flex", width: "100%" }}>
        <p
          style={{
            margin: "70px 0 0 10px",
            fontSize: "5px",
            fontWeight: "200",
            color: "#838383",
          }}
        >
          NANUM 은 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품,{" "}
          <br />
          상세정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.
        </p>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <p
          style={{
            margin: "25px 0 0 10px",
            fontSize: "7px",
            fontWeight: "400",
            color: "#b8b8b8",
          }}
        >
          Copyright © 2023 TEAM NANUM, All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default GuestPage;
