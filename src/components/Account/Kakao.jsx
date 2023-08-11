import React, { useEffect, useState } from 'react';
import "../../styles/Account/Kakao.css";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Kakao = ({ access_token, token_set, PROXY }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState(false);

    const onKaKaoLogin = () => {
        window.location.href = `${PROXY}/api/login/kakao`;
        setLoginState(idx=>!idx);
    }

    useEffect(() => {
        // Zustand 사용해서 저장하는 코드 => 잘 안 먹혀서 일단 주석 처리함.
        token_set(location.search.slice(7));
        
        // 엑세스 토큰 로컬 스토리지에 저장
        (location.search.slice(7)) ? localStorage.setItem('access_token', location.search.slice(7)) : console.log(".");

        if (localStorage.getItem('access_token')) {
            navigate('/main')
        }

    }, [loginState])

    

    return (
        <div className='kakao_container'>
            <img src='./img/imgAccount/kakao_login.png' alt='카카오 로그인' onClick={onKaKaoLogin}/>
        </div>
    );
};

export default Kakao;