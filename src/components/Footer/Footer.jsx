import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/Footer/Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="Footer_container">
      <div
        className="Footer_icon"
        onClick={() => {
          navigate(`/category`);
        }}
      >
        {location.pathname === "/category" ? (
          <img src="./img/imgFooter/categoryActive.svg" alt="카테고리"></img>
        ) : (
          <img src="./img/imgFooter/category.svg" alt="카테고리"></img>
        )}
      </div>
      <div
        className="Footer_icon"
        onClick={() => {
          if (location.pathname !== "/search") {
            navigate(`/search`);
          }
        }}
      >
        {location.pathname === "/search" ? (
          <img src="./img/imgFooter/searchActive.svg" alt="검색"></img>
        ) : (
          <img src="./img/imgFooter/search.svg" alt="검색"></img>
        )}
      </div>
      <div
        className="Footer_icon"
        onClick={() => {
          navigate(`/main`);
        }}
      >
        {location.pathname === "/main" ? (
          <img src="./img/imgFooter/homeActive.svg" alt="홈"></img>
        ) : (
          <img src="./img/imgFooter/home.svg" alt="홈"></img>
        )}
      </div>
      <div
        className="Footer_icon"
        onClick={() => {
          navigate(`/mypage`);
        }}
      >
        {location.pathname === "/mypage" ? (
          <img src="./img/imgFooter/mypageActive.svg" alt="마이페이지"></img>
        ) : (
          <img src="./img/imgFooter/mypage.svg" alt="마이페이지"></img>
        )}
      </div>
      <div
        className="Footer_icon"
        onClick={() => {
          navigate(`/shoppingcart`);
        }}
      >
        {location.pathname === "/shoppingcart" ? (
          <img
            src="./img/imgFooter/shoppingCartActive.svg"
            alt="장바구니"
          ></img>
        ) : (
          <img src="./img/imgFooter/shoppingCart.svg" alt="장바구니"></img>
        )}
      </div>
    </div>
  );
};

export default Footer;
