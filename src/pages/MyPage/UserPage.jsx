import React from 'react';
import "../../styles/MyPage/UserPage.css";
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer.jsx';
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
            <SubHeader page={"마이페이지"}/>
            <div className='userpage_container'>
                <Profil userData ={userData} onLogout={onLogout} />
                <Shopping navigate = {navigate} />
                <Point userData={userData} navigate = {navigate} />
            </div>
            <Footer />
        </>
    );
};

export default UserPage;