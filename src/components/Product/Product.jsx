import React from "react";
import "../../styles/Product/Product.css"

const Product = ({ list }) => {
    return (
        <div className="Product_container">
            <div className="Product_top">
                <div className="Product_top_left">
                    <div className="Product_info">상품 정보</div>
                    <img src="./img/imgProduct/productInfo.png" alt="상품정보아이콘"></img>
                </div>
                <div className="Product_top_right">
                    <img src="./img/imgProduct/product_icon.png" alt="상품아이콘"></img>
                </div>
            </div>
            <div className="Product_content">
                <div className="Product_image">
                    <img src={list.imgUrl} alt="상품이미지"></img>
                </div>
                <div className="Product_detail_info">
                    <div className="Product_name">
                        <div className="Product_type">제품명</div>
                        <div className="Product_info">{list.name}</div>
                    </div>
                    <div className="Product_location">
                        <div className="Product_type">지역</div>
                        <div className="Product_info">{list.seller}</div>
                    </div>
                    <div className="Product_other_info">
                        <div className="Product_delivery">
                            <div className="Product_type">배달 방법</div>
                            <div className="Product_info">
                                {list.deliveryType === 'PACKAGE' ? '택배 배송' : '직접 배송'}
                            </div>
                        </div>
                        <div className="Product_price">
                            <div className="Product_type">가격</div>
                            <div className="Product_info">{list.price}원</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;



