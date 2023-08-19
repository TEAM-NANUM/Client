import React, { useState } from "react";
import "../../styles/Account/LoginPage.css";
import Logo from "../../components/Account/Logo";
import Kakao from "../../components/Account/Kakao";
import Code from "../../components/Account/Code";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ access_token, token_set, PROXY, setUserData }) => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [chk, setChk] = useState(false);

  return (
    <div className="login_container" style={{ display: chk ? "" : "none" }}>
      <div className="login_logo">
        <Logo />
      </div>
      <div className="login_form">
        <Kakao
          access_token={access_token}
          token_set={token_set}
          PROXY={PROXY}
          setChk={setChk}
        />
        <p>또는</p>
        <Code
          code={code}
          setCode={setCode}
          PROXY={PROXY}
          setUserData={setUserData}
        />
        <p onClick={() => navigate("/sellerlogin")}>판매자 로그인</p>
      </div>
    </div>
  );
};

export default LoginPage;
