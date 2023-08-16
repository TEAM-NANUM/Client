import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../../styles/Product/ProductDetailPage.css";
import SubHeader from '../../components/SubHeader';
import ProductDetailMain from '../../components/Product/ProductDetailMain';
import ProductDetailInfo from '../../components/Product/ProductDetailInfo';
import ProductPopUp from '../../components/Product/ProductPopUp';
import ProductSelectPopUp from '../../components/Product/ProductSelectPopUp';
import ProductReviewPopUp from '../../components/Product/ProductReviewPopUp';
import Footer from '../../components/Footer/Footer';

const ProductDetailPage = ({ PROXY }) => {

    const { id } = useParams();

    const [isPurchaseClicked, setPurchaseClicked] = useState(false);
    const [isReviewClicked, setIsReveiwClicked] = useState(false);

    const [review, setReview] = useState({ reviews: [] })

    const [product, setProduct] = useState({ product: [] });

    useEffect(() => {
        axios.get(`${PROXY}/api/products/${id}/reviews`)
            .then((res) => setReview(res.data))
            .catch((err) => console.log(err))
    }, []);

    useEffect(() => {
        axios.get(`${PROXY}/api/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err))
    }, []);

    const handlePurchaseClick = () => {
        setPurchaseClicked(true);
    };

    const handlePurchaseCloseClick = () => {
        setPurchaseClicked(false);
    }

    const handleReviewClick = () => {
        setIsReveiwClicked(true);
    }

    const handleReviewCloseClick = () => {
        setIsReveiwClicked(false);
    }

    return (
        <div className='ProductDetailPage_container'>
            <SubHeader page={'상세정보'}></SubHeader>
            <div className={`ProductDetailPage_info ${isPurchaseClicked ? 'ProductSelectPopUp' : ''} ${isReviewClicked ? 'ProductReviewPopUp' : ''}`}>
                <ProductDetailMain product={product}></ProductDetailMain>
                <ProductDetailInfo product={product}></ProductDetailInfo>
            </div>
            {isPurchaseClicked ? (
                <ProductSelectPopUp PROXY={PROXY} id={id} product={product} onDeleteClick={handlePurchaseCloseClick}></ProductSelectPopUp>
            ) : isReviewClicked ? (
                <ProductReviewPopUp onDeleteClcik={handleReviewCloseClick} product={product} review={review}></ProductReviewPopUp>
            ) : (
                <ProductPopUp PROXY={PROXY} id={id} onPurchaseClick={handlePurchaseClick} onReviewClick={handleReviewClick}></ProductPopUp>
            )}
            <Footer></Footer>
        </div>
    );
};

export default ProductDetailPage;