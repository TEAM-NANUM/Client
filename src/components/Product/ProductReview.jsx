import react from "react";
import "../../styles/Product/ProductReview.css"

const ProductReview = ({ list }) => {
    return (
        <div className="ProductReview_container">
            <img src="../img/imgProduct/product.png" alt="상품이미지"></img>
            <div className="ProductReview_content">
                <div className="ProductReview_writer">작성자 : {list.usename}</div>
                <div className="ProductReview_name">이쁘니 피망</div>
                <div className="ProductReview_rating">
                    <img src="../img/imgProduct/rating_img.png"></img>
                </div>
                <div className="ProductReview_coment">
                    {list.comment}
                </div>
            </div>
        </div>
    )
}

export default ProductReview;