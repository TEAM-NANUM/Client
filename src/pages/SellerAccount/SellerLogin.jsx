import React, { useEffect, useState } from "react";
import "../../styles/SellerAccount/SellerLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SellerLogin = ({ PROXY }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sellerLoginForm, setSellerLoginForm] = useState({
    email: "",
    password: "",
  });

  const onEmail = (e) => {
    setEmail(e.currentTarget.value);
    setSellerLoginForm({ ...sellerLoginForm, email: e.currentTarget.value });
  };

  const onPassword = (e) => {
    setPassword(e.currentTarget.value);
    setSellerLoginForm({ ...sellerLoginForm, password: e.currentTarget.value });
  };

  const onSellerLogin = () => {
    axios
      .post(`${PROXY}/api/login/seller`, sellerLoginForm)
      .then((res) => localStorage.setItem("access_token", res.data.token))
      .then((res) => navigate("/sellerMyPage"))
      .catch((err) =>
        alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인 해주세요.")
      );
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="SellerLogin_container">
      <img src="./img/imgSellerAccount/logo.svg" alt="logo" />
      <div className="SellerLogin_form">
        <div className="seller_email">
          <div className="seller_form_text">이메일</div>
          <input
            type="text"
            value={email}
            placeholder="이메일을 입력하세요"
            onChange={onEmail}
          />
        </div>
        <div className="seller_password">
          <div className="seller_form_text">비밀번호</div>
          <input
            type="password"
            value={password}
            placeholder="비밀번호를 입력하세요"
            onChange={onPassword}
          />
        </div>
        <div className="seller_loginBtn" onClick={onSellerLogin}>
          로그인
        </div>
        <div className="seller_anotherPath">
          <div className="seller_join">
            <div>회원이 아니세요?</div>
            <div
              className="another_path"
              onClick={() => navigate("/sellerjoin")}
            >
              ▶︎ 판매자 회원가입으로 바로가기 ◀︎
            </div>
          </div>
          <div className="go_user">
            <div>상품을 구입하러 오셨나요?</div>
            <div className="another_path" onClick={() => navigate("/")}>
              ▶︎ 구매자 로그인 화면으로 바로가기 ◀︎
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
