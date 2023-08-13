import React, { useState } from 'react';
import NotLogin from './NotLogin';
import UserPage from './UserPage';
import GuestPage from './GuestPage';
import "../../styles/MyPage/MyPage.css"
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer.jsx';

const MyPage = ({userData}) => {

    console.log(userData)

    return (
        <>
            <SubHeader page={"마이페이지"} />
            {userData ? ((userData.is_guest === false) ? <UserPage userData={userData} /> : <GuestPage userData={userData} />) : <NotLogin />}
            <Footer />
        </>
    );
};

export default MyPage;