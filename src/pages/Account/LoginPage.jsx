import React, { useState } from 'react';
import "../../styles/Account/LoginPage.css"
import Logo from '../../components/Account/Logo';
import Kakao from '../../components/Account/Kakao';
import Code from '../../components/Account/Code';

const LoginPage = ({ access_token, token_set, PROXY, setUserData }) => {

    const [code, setCode] = useState("")

    return (
        <div className='login_container'>
            <div className='login_logo'>
                <Logo />
            </div>
            <div className='login_form'>
                <Kakao access_token={access_token} token_set={token_set} PROXY={PROXY}/>
                <p>또는</p>
                <Code code={code} setCode={setCode} PROXY={PROXY} setUserData={setUserData} />
                <p>판매자 로그인</p>
            </div>
        </div>
    );
};

export default LoginPage;