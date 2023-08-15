import React, { useState } from 'react';
import "../../styles/SellerAccount/SellerLogin.css";
import axios from 'axios';

const SellerLogin = ({PROXY}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [sellerLoginForm, setSellerLoginForm] = useState({
        "email" : "",
        "password" : ""
    })

    const onEmail = (e) => {
        setEmail(e.currentTarget.value)
        setSellerLoginForm({...sellerLoginForm, "email" : e.currentTarget.value })
    }

    const onPassword = (e) => {
        setPassword(e.currentTarget.value)
        setSellerLoginForm({...sellerLoginForm, "password" : e.currentTarget.value })
    }

    const onSellerLogin = () => {
        axios.post(`${PROXY}/api/login/seller`, sellerLoginForm)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    return (
        <div className='SellerLogin_container'>
            <img src='./img/imgSellerAccount/logo.svg' alt='logo' />
            <div className='SellerLogin_form'>
                <div className='seller_email'>
                    <div className='seller_form_text'>이메일</div>
                    <input type='text' value={email} placeholder='이메일을 입력하세요' onChange={onEmail} />
                </div>
                <div className='seller_password'>
                    <div className='seller_form_text'>비밀번호</div>
                    <input type='password' value={password} placeholder='비밀번호를 입력하세요' onChange={onPassword} />
                </div>
                <div className='seller_loginBtn' onClick={onSellerLogin}>로그인</div>
                <div className='seller_another'></div>
            </div>
        </div>
    );
};

export default SellerLogin;