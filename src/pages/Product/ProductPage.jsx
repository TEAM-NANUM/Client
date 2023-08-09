import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/Product/ProductPage.css"
import SearchBar from "../../components/Product/SearchBar";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";

const ProductPage = () => {
    const navigate = useNavigate();

    return (
        <div className='ProductPage_container'>
            <SearchBar></SearchBar>
            <div className='ProductPage_top'>
                <div className='ProductPaeg_top_left'>
                    <div>제철과일</div>
                    <img src='./img/imgProduct/item_icon.png' alt='상품아이콘'></img>
                </div>
                <div className='ProductPage_top_right'>정렬하기</div>
            </div>
            <div className='Product_list'>
                <div onClick={() => navigate('/product/detail')}>
                    <Product></Product>
                </div>
                <div onClick={() => navigate('/product/detail')}>
                    <Product></Product>
                </div>
                <div onClick={() => navigate('/product/detail')}>
                    <Product></Product>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductPage;