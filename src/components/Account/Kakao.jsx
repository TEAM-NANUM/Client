import React from 'react';
import "../../styles/Account/Kakao.css";

const Kakao = ({ access_token, token_set }) => {
    return (
        <div className='kakao_container'>
            <img src='./img/imgAccount/kakao_login.png' alt='카카오 로그인'/>
        </div>
    );
};

export default Kakao;