import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from 'react-router-dom';
import "../../styles/Product/SearchBar.css";

const SearchBar = ({ inputValue, handleInputChange}) => {
    const navigate = useNavigate();
    
    const onBack = () => {
        navigate(-1);
    }
    return (
        <div className="SearchBar_container">
            <div id='subHeader_back'><img src='./img/imgs/back.svg' alt='Back' onClick={onBack} /></div>
            <input className="SearchBar" 
                value={inputValue}
                onChange={handleInputChange}
            ></input>
            <div className='search_cancel_btn'  onClick={onBack}>취소</div>
        </div>
    );
};

export default SearchBar;