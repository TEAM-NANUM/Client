import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../styles/Footer/Footer.css";

const SellerFooter = () => {
    
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="Footer_container">
      <div
        className="Footer_icon"
        onClick={() => {
          navigate(`/sellerMyPage`);
        }}
      >
        {location.pathname === "/sellerMyPage" ? (
          <img src="./img/imgFooter/sellerMyPageActive.svg" alt="마이페이지"></img>
        ) : (
          <img src="./img/imgFooter/sellerMyPageActive.svg" alt="마이페이지"></img>
        )}
      </div>
      <div
        className="Footer_icon"
        onClick={() => {
          if (location.pathname !== "/sellerProductAddPage") {
            navigate(`/sellerProductAddPage`);
          }
        }}
      >
        <img src="./img/imgFooter/sellerAddProduct.svg" alt="상품 추가"></img>
      </div>
    </div>
  );
};

export default SellerFooter;