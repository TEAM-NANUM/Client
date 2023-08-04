import React from 'react';
import "../../../styles/MyPage/NotLogin/Profil.css";

const Profil = ({onLogin}) => {
    return (
        <div className='notlogin_profil'>
            <div className='notlogin_header'>
                <p>내 정보</p>
                <img src='./img/imgMyPage/myinfo.svg' alt='내 정보'/>
            </div>
            <div className='notlogin_content'>
                <div className='notlogin_profil_info'>
                    <img src='./img/imgMyPage/profil.svg' alt='프로필 사진'/>
                    <p onClick={onLogin}>로그인을 해주세요.</p>
                </div>
            </div>
        </div>
    );
};

export default Profil;