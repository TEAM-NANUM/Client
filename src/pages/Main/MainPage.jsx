import React, { useEffect } from 'react';
import Header from "../../components/Main/Header";
import Carousel from '../../components/Main/Carousel';
import PopularItem from '../../components/Main/PopularItem';
import NewItem from '../../components/Main/NewItem';
import Footer from '../../components/Footer/Footer';
import { useLoginStore } from '../../components/Account/Store';
import axios from 'axios';

const MainPage = ({PROXY, userData, setUserData}) => {

    return (
        <div>
            <Header></Header>
            <Carousel></Carousel>
            <PopularItem></PopularItem>
            <NewItem></NewItem>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;