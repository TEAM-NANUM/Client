import React, { useState } from 'react';
import NotLogin from './NotLogin';
import UserPage from './UserPage';
import GuestPage from './GuestPage';
import "../../styles/MyPage/MyPage.css"

const MyPage = ({userData}) => {
    return (
        <div className='mypage_container'>
            {userData ? ((userData.is_guest === false) ? <UserPage userData={userData} /> : <GuestPage userData={userData} />) : <NotLogin />}
        </div>
    );
};

export default MyPage;