import React from 'react';
import "../../../styles/MyPage/UserPage.css";

const Profil = ({ userData, onLogout }) => {
    return (
        <div className='user_profil'>
            <div className='user_header'>
                <p>내 정보</p>
                <img src='./img/imgMyPage/myinfo.svg' alt='내 정보' />
            </div>
            <div className='user_content'>
                <div className='user_profil_info'>
                    <img src='./img/imgMyPage/profil.svg' alt='프로필 사진' />
                    <div>{userData.name} 님, 안녕하세요.</div>

                </div>
                <div className='user_logout' onClick={onLogout}>
                    로그아웃
                </div>
            </div>
        </div>
    );
};

export default Profil;