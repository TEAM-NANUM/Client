import react, { useState } from 'react';
import "../../styles/Product/ProductDetailPage.css";
import SubHeader from '../../components/SubHeader';
import ProductDetailMain from '../../components/Product/ProductDetailMain';
import ProductDetailInfo from '../../components/Product/ProductDetailInfo';
import ProductPopUp from '../../components/Product/ProductPopUp';
import ProductSelectPopUp from '../../components/Product/ProductSelectPopUp';
import ProductReviewPopUp from '../../components/Product/ProductReviewPopUp';
import Footer from '../../components/Footer/Footer';

const ProductDetailPage = () => {

    const [isPurchaseClicked, setPurchaseClicked] = useState(false);
    const [isReviewClicked, setIsReveiwClicked] = useState(false);

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
                <ProductDetailMain></ProductDetailMain>
                <ProductDetailInfo></ProductDetailInfo>
            </div>
            {isPurchaseClicked ? (
                <ProductSelectPopUp onDeleteClick={handlePurchaseCloseClick}></ProductSelectPopUp>
            ) : isReviewClicked ? (
                <ProductReviewPopUp onDeleteClcik={handleReviewCloseClick}></ProductReviewPopUp>
            ) : (
                <ProductPopUp onPurchaseClick={handlePurchaseClick} onReviewClick={handleReviewClick}></ProductPopUp>
            )}
            <Footer></Footer>
        </div>
    );
};

export default ProductDetailPage;