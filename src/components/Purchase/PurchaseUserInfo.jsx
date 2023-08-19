import react from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Purchase/PurchaseUserInfo.css";

const PurchaseUserInfo = ({ userInfo }) => {
  const navigate = useNavigate();

  return (
    <div className="PurchaseUserInfo_container">
      <div className="PurchaseUserInfo_top">
        <div className="User_info">
          <div className="User_info_coment">사용자 정보 입력</div>
          <img src="../img/imgPurchase/productInfo.png" alt="사용자정보"></img>
        </div>
        <div
          className="Delivery_address_management"
          onClick={() => {
            navigate("/address");
          }}
        >
          배송지 관리
        </div>
      </div>
      <div className="PurchaseUserInfo_content">
        <div className="address">
          <div className="PurchaseUserInfo_type">주소</div>
          {userInfo && (
            <div className="PurchaseUserInfo">
              {userInfo.address.zip_code} {userInfo.address.default_address}{" "}
              {userInfo.address.detail_address}
            </div>
          )}
        </div>

        <div className="name">
          <div className="PurchaseUserInfo_type">주문자 명</div>
          {userInfo && (
            <div className="PurchaseUserInfo">{userInfo.user_name}</div>
          )}
        </div>
        <div className="phone_num">
          <div className="PurchaseUserInfo_type">전화번호</div>
          {userInfo && (
            <div className="PurchaseUserInfo">{userInfo.phone_number}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchaseUserInfo;
