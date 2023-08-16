import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Main/Header.css";

const Header = () => {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const navigate = useNavigate();

    return (
        <div className='Header_container'>
            <div className='Header_icon'>
                <img src='./img/imgMain/logo.svg' alt='한채'></img>
            </div>
            <div className='searchBar' type='text' value={search} onChange={onChange} onClick={()=>navigate("/search")}>
                <img style={{objectFit: "cover", weight: "15px", height: "15px", marginRight: "7px"}} src="./img/imgMain/searchIcon.svg" alt="검색"/>
                한채에서 검색하세요!
            </div>
        </div>
    )
}

export default Header;