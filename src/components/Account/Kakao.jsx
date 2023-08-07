import React, { useEffect, useState } from 'react';
import "../../styles/Account/Kakao.css";
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Kakao = ({ access_token, token_set }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState(false);

    const onKaKaoLogin = () => {
        window.location.href = "http://118.67.128.48:8080/api/login/kakao";
        setLoginState(idx=>!idx);
    }

    useEffect(() => {
        // Zustand 사용해서 저장하는 코드 => 잘 안 먹혀서 일단 주석 처리함.
        // token_set(location.search.slice(7));
        // console.log(access_token)
        
        localStorage.setItem('access_token', location.search.slice(7));

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