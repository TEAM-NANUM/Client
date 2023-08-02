import React from 'react';
import "../../styles/Main/MainPage.css"
import Header from "../../components/Main/Header";
import Carousel from '../../components/Main/Carousel';
import PopularItem from '../../components/Main/PopularItem';
import NewItem from '../../components/Main/NewItem';
import Footer from '../../components/Footer/Footer';

const MainPage = () => {
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