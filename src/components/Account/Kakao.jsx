import React, { useEffect, useState } from "react";
import "../../styles/Account/Kakao.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Kakao = ({ access_token, token_set, PROXY, setChk }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(false);

  const onKaKaoLogin = () => {
    window.location.href = `${PROXY}/api/login/kakao`;
    setLoginState((idx) => !idx);
  };

  const chkUser = () => {
    if (localStorage.getItem("access_token")) {
      axios
        .get(`${PROXY}/api/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((res) => {
          navigate("/main");
        })
        .catch((err) => {
          setChk(true);
          return;
        });
    } else {
      setChk(true);
    }
  };

  useEffect(() => {
    // Zustand 사용해서 저장하는 코드 => 잘 안 먹혀서 일단 주석 처리함.
    token_set(location.search.slice(7));
    // 엑세스 토큰 로컬 스토리지에 저장
    location.search.slice(7)
      ? localStorage.setItem("access_token", location.search.slice(7))
      : console.log(".");
    chkUser();
  }, [loginState]);

  return (
    <div className="kakao_container">
      <img
        src="./img/imgAccount/kakao_login.png"
        alt="카카오 로그인"
        onClick={onKaKaoLogin}
      />
    </div>
  );
};

export default Kakao;
