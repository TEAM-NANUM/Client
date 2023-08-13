import React from 'react';
import "../../styles/MyPage/GuestPage/GuestPage.css";
import { useNavigate } from 'react-router-dom';
import Profil from '../../components/MyPage/GuestPage/Profil';
import HostShoppingInfo from '../../components/MyPage/GuestPage/HostShoppingInfo';
import Point from '../../components/MyPage/GuestPage/Point';

const GuestPage = ({userData}) => {

    const navigate = useNavigate();

    const onLogout = () => {
        window.localStorage.clear();
        navigate('/');
    }


    return (
        <>
            <Profil userData={userData} onLogout={onLogout} />
            <div className='divider' />
            <HostShoppingInfo navigate={navigate}/>
            <div className='divider' />
            <Point userData={userData} navigate={navigate}/>
            <div className='divider' />
            <img src='./img/imgMyPage/guestImg.svg' alt="guest 이미지"/>
        </>
    );
};

export default GuestPage;