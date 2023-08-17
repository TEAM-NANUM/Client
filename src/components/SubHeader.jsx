import React from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/components/SubHeader.css";
import { useNavigate } from 'react-router-dom';

// 검색창이 없는 헤더. (로고와 뒤로가기 버튼만 있는.)

const SubHeader = ({ page, useX, path }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const onBack = () => {
        navigate(path || -1);
    }

    const onX = () => {
        navigate(path || -1)
    }

    return (
        <div className='subHeader_container'>
            <div id='subHeader_back'>
                {useX ? (
                    <img src='./img/imgs/x.svg' alt='x' onClick={onX} />
                ) : location.pathname.split("/").length === 3 ? (
                    <img src='../img/imgs/back.svg' alt='Back' onClick={onBack} />
                ) : (
                    <img src='./img/imgs/back.svg' alt='Back' onClick={onBack} />
                )}
            </div>
            <div id='subHeader_pageName'><span>{page}</span></div>
            <div id='subHeader_back' />
        </div>
    );
};

export default SubHeader;