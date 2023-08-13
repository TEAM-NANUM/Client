import React from 'react';
import "../../styles/MyPage/UserPage.css";
import { useNavigate } from 'react-router-dom';
import Profil from '../../components/MyPage/UserPage/Profil';
import Shopping from '../../components/MyPage/UserPage/Shopping';
import Point from '../../components/MyPage/UserPage/Point';

const UserPage = ({userData}) => {

    const navigate = useNavigate();

    const onLogout = () => {
        window.localStorage.clear();
        navigate('/');
    }

    return (
        <>
            <Profil userData ={userData} onLogout={onLogout} />
            <div className='divider' />
            <Shopping navigate = {navigate} />
            <div className='divider' />
            <Point userData={userData} navigate = {navigate} />
        </>
    );
};

export default UserPage;