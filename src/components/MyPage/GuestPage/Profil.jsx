import React from 'react';
import "../../../styles/MyPage/GuestPage/Profil.css";

const Profil = ({userData, onLogout}) => {
    return (
        <div className='user_profil'>
            <div className='user_profil_info'>
                <img src='./img/imgMyPage/profilGuest.svg' alt='프로필 사진' />
                <div style={{ marginLeft: "16px"}}>
                    <p style={{margin: "0", fontSize: "18px", fontWeight: "500"}}>{userData.name} 님, 안녕하세요!</p>
                    <p style={{margin: "5px 0 0", fontSize: "12px", fontWeight: "400", color: "darkgray"}}>손님 계정은 상품 구매만 가능해요.</p>
                </div>

                <div style={{ marginLeft: "auto"}}>
                    <p style={{fontSize: "12px", color: "rgb(211, 35, 47)"}} onClick={onLogout}>
                        로그아웃
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profil;