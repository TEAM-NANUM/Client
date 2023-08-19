import React from "react";
import "../../styles/MyPage/NotLogin/NotLogin.css";
import Profil from "../../components/MyPage/NotLogin/Profil";
import { useNavigate } from "react-router-dom";

const NotLogin = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/");
  };

  return (
    <div className="NotLogin_container">
      <Profil onLogin={onLogin} />
    </div>
  );
};

export default NotLogin;
