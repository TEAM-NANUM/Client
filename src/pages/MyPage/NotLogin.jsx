import React from 'react';
import "../../styles/MyPage/NotLogin/NotLogin.css";
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/Footer';
import Profil from '../../components/MyPage/NotLogin/Profil';
import { useNavigate } from 'react-router-dom';

const NotLogin = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/');
    }

    return (
        <>
           <SubHeader page={"마이페이지"} />
           <div className='NotLogin_container'>
                <Profil onLogin={onLogin} />
                <img src='./img/imgMyPage/NotLogin.svg' alt='로그인을 안했을 때'/>
           </div>
           <Footer />
        </>
    );
};

export default NotLogin;