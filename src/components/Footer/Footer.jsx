import React from 'react';
import { useNavigate } from "react-router-dom";
import "../../styles/Footer/Footer.css";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className='Footer_container'>
            <div className='Footer_icon' onClick={() => { navigate(`/category`) }}>
                <img src='./img/imgFooter/category.png' alt='카테고리'></img>
            </div>
            <div className='Footer_icon' onClick={() => { navigate(`/search`) }}>
                <img src='./img/imgFooter/search.png' alt='검색'></img>
            </div>
            <div className='Footer_icon' onClick={() => { navigate(`/`) }}>
                <img src='./img/imgFooter/home.png' alt='홈'></img>
            </div>
            <div className='Footer_icon' onClick={() => { navigate(`/mypage`) }}>
                <img src='./img/imgFooter/mypage.png' alt='마이페이지'></img>
            </div>
            <div className='Footer_icon' onClick={() => { navigate(`/shoppingcart`) }}>
                <img src='./img/imgFooter/shopping_cart.png' alt='장바구니'></img>
            </div>
        </div>
    );
};

export default Footer;