import React from 'react';
import "../../../styles/MyPage/UserPage.css";

const Profil = ({ userData, onLogout }) => {
    return (
        <div className='user_profil'>
            <div className='user_profil_info'>
                <img src='./img/imgMyPage/profilHost.svg' alt='프로필 사진' />
                <div style={{ marginLeft: "16px"}}>
                    <p style={{margin: "0", fontSize: "18px", fontWeight: "500"}}>{userData.name} 님, 안녕하세요!</p>
                    <p style={{margin: "5px 0 0", fontSize: "12px", fontWeight: "400", color: "darkgray"}}>일반회원은 그룹원을 관리할 수 있어요.</p>
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