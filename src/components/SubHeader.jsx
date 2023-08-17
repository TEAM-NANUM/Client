import React from 'react';
import "../styles/components/SubHeader.css";
import { useNavigate } from 'react-router-dom';


const SubHeader = ({ page, useX, path}) => {

    const navigate = useNavigate();

    const onBack = () => {
        navigate(path || -1);
    }

    const onX = () => {
        navigate(path || -1)
    }

    return (
        <div className='subHeader_container'>
            <div id='subHeader_back'>{useX?<img src='./img/imgs/x.svg' alt='x' onClick={onX} />:<img src='./img/imgs/back.svg' alt='Back' onClick={onBack} />}</div>
            <div id='subHeader_pageName'><span>{page}</span></div>
            <div id='subHeader_back' />
        </div>
    );
};

export default SubHeader;