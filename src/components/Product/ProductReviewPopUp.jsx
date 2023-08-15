import react from "react";
import "../../styles/Product/ProductReviewPopUp.css"
import ProductReview from "./ProductReview";
const ProductReviewPopUp = ({ onDeleteClcik, product, review }) => {
    return (
        <div className="ProductReviewPopUp_container">
            <div className="ProductReviewPopUp_top">
                <div className="ProductReviewPopUp_top_delete">
                    <img src="../img/imgProduct/thumbUp__icon.png"></img>
                    <div className="close" onClick={onDeleteClcik}>
                        <img src="../img/imgProduct/close.png"></img>
                    </div>
                </div>
                <div className="ProductReveiwPopUp_top_content">
                    {review.reviews.map((list, idx) => <ProductReview product={product} list={list} key={idx} />)}
                </div>
            </div>
            <div className="ProductReviewPopUp_bottom">
                <div className="ProductReviewPopUp_bottom_inner">
                    <div className="ProductReviewPopUp_bottom_coment">본 상품은 택배 배송입니다.</div>
                    <img src="../img/imgProduct/localShopping_icon.png" alt="택배아이콘"></img>
                    <div className="ProductReviewPopUp_thumb_up">
                        <img src="../img/imgProduct/thumbUp_icon.png" alt="좋아요아이콘"></img>
                    </div>
                    <div className="ProductReivewPopUp_ShoppingCart">
                        <img src="../img/imgProduct/ShoppingCart_icon.png" alt="장바구니아이콘"></img>
                    </div>
                    <div className="ProductReviewPopUp_bottom_purchase_buttom">구매하기</div>
                </div>
            </div>
        </div>
    )
}

export default ProductReviewPopUp;