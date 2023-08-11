import React from 'react';
import "../../styles/MyPage/GuestPage/GuestPage.css";
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer';
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
            <SubHeader page={'마이페이지'} />
            <div className='GusetPage_container'>
                <Profil userData={userData} onLogout={onLogout} />
                <HostShoppingInfo navigate={navigate}/>
                <Point userData={userData} navigate={navigate}/>
                <img src='./img/imgMyPage/guestImg.svg' alt="guest 이미지"/> 
            </div>
            <Footer />
        </>
    );
};

export default GuestPage;