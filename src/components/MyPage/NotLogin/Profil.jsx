import React from 'react';
import "../../../styles/MyPage/NotLogin/Profil.css";

const Profil = ({onLogin}) => {
    return (
        <div className='not_login_wrapper'>
            <img src='./img/imgAccount/logo.svg' alt='로고' />
            <div className='not_login_wrapper' style={{marginTop: "0"}}>
                <p>농수산물 직거래 장터, 한채</p>
                <p>우리집 냉장고를 든든하게 채워봐요!</p>
            </div>
            <div className='redirect_loginpage' onClick={onLogin}>지금 바로 로그인하기</div>
        </div>
    );
};

export default Profil;