import React, { useState } from 'react';
import "../../styles/Main/Header.css";

const Header = () => {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='Header_container'>
            <div className='Header_icon'>
                <img src='./img/imgMain/main_icon.png' alt='메인아이콘1'></img>
            </div>
            <div className='Header_icon'>
                <img src='./img/imgMain/main_icon2.png' alt='메인아이콘2'></img>
            </div>
            <div className='search'>
                <input className='searchBar' type='text' value={search} onChange={onChange} placeholder='검색해보세요.'></input>
            </div>
            <div className='Header_search_icon'>
                <img src='./img/imgMain/search.png' alt='검색'></img>
            </div>
        </div>
    )
}

export default Header;