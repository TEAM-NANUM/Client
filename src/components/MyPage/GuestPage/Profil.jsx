import React from 'react';
import "../../../styles/MyPage/GuestPage/Profil.css";

const Profil = ({userData, onLogout}) => {
    return (
        <div className='guest_profil'>
            <div className='guest_header'>
                <p>내 정보</p>
                <img src='./img/imgMyPage/myinfo.svg' alt='내 정보'/>
            </div>
            <div className='guest_content'>
                <div className='guest_profil_info'>
                    <img src='./img/imgMyPage/profil.svg' alt='프로필 사진'/>
                    <p>{userData.name}</p>
                    <p id='guest_name'>Guest</p>
                </div>
                <div className='guest_logout' onClick={onLogout}>
                    로그아웃
                </div>
            </div>
        </div>
    );
};

export default Profil;