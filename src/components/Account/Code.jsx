import React, { useEffect, useState } from "react";
import "../../styles/Account/Code.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Code = ({ code, setCode, PROXY, setUserData }) => {
  const navigate = useNavigate();
  const [isInputLoading, setIsInputLoading] = useState(false);
  const [guestLoginErr, setGuestLoginErr] = useState(false);

  const onCode = (e) => {
    setGuestLoginErr(false);
    setCode(e.currentTarget.value);
  };

  const onEnter = (e) => {
    if (isInputLoading === false && e.key === "Enter") {
      performGeustLogin();
    }
  };

  const performGeustLogin = () => {
    setIsInputLoading(true);
    axios
      .post(`${PROXY}/api/login/guest`, {
        invite_code: code,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.token);
        window.location.reload("/main");
      })
      .catch((err) => {
        setCode("");
        setGuestLoginErr(true);
        setIsInputLoading(false);
      });
  };

  return (
    <>
      <div className="code_container">
        <input
          type="text"
          value={code}
          placeholder="게스트 코드 입력"
          disabled={isInputLoading}
          onChange={onCode}
          onKeyDown={onEnter}
          maxLength={8}
        />
        {code !== "" ? (
          <button
            className="login-button"
            onClick={performGeustLogin}
            disabled={isInputLoading}
          >
            로그인
          </button>
        ) : (
          ""
        )}
      </div>
      {guestLoginErr ? (
        <p style={{ color: "#ff4f4f" }}>코드가 올바르지 않습니다.</p>
      ) : (
        ""
      )}
    </>
  );
};

export default Code;
