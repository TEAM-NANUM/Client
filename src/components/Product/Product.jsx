import React from "react";
import "../../styles/Product/Product.css"

const Product = ({ list }) => {
    const getFormattedRating = (rating) => {
        if (rating >= 1 && rating < 1.5) {
            return 1;
        } else if (rating >= 1.5 && rating < 2) {
            return 1.5;
        } else if (rating >= 2 && rating < 2.5) {
            return 2;
        } else if (rating >= 2.5 && rating < 3) {
            return 2.5;
        } else if (rating >= 3 && rating < 3.5) {
            return 3;
        } else if (rating >= 3.5 && rating < 4) {
            return 3.5;
        } else if (rating >= 4 && rating < 4.5) {
            return 4;
        } else if (rating >= 4.5 && rating < 5) {
            return 4.5;
        } else if (rating === 5) {
            return 5;
        } else {
            return 0; // 기본적으로 5로 처리하거나 필요에 따라 다른 기본값 사용
        }
    };

    const formattedRating = getFormattedRating(list.ratingAvg); // 평점 변환

    return (
        <div className="Product_container">
            <div className="Product_content">
                <div className="Product_image">
                    <img src={list.imgUrl} className="search_prod_container" alt="상품이미지"></img>
                </div>
                <div className="search_list_detail">
                    <div className="search_seller">
                        {list.seller}
                    </div>
                    <div className="search_prod_name">
                        {list.name}
                    </div>
                    <div className="search_prod_price">{list.price.toLocaleString()}원</div>
                    <div>
                        
                    <img style={{objectFit: "cover", width: "70px"}} src={`./img/imgProduct/${formattedRating}.svg`} alt='star' />

                    </div>
                    <div className="search_prod_pack">
                        {list.deliveryType === 'PACKAGE' ? '택배배송' : '직배송'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;