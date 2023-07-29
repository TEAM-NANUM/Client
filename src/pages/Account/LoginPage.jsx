import React from 'react';
import "../../styles/Account/LoginPage.css"
import Logo from '../../components/Account/Logo';
import Kakao from '../../components/Account/Kakao';
import Code from '../../components/Account/Code';

const LoginPage = () => {
    return (
        <div className='login_container'>
            <div className='login_logo'>
                <Logo />
            </div>
            <div className='login_form'>
                <Kakao />
                <p>또는</p>
                <Code />
                <p>판매자 로그인</p>
            </div>
        </div>
    );
};

export default LoginPage;