import React from "react";
import "../../styles/Product/Product.css"

const Product = ({ list }) => {
    const isPurchasePage = window.location.pathname.includes("/purchase/");

    // 이미지 파일 경로를 동적으로 생성
    const productInfoImagePath = isPurchasePage
        ? `../img/imgProduct/productInfo.png`
        : `./img/imgProduct/productInfo.png`;

    const productIconImagePath = isPurchasePage
        ? `../img/imgProduct/product_icon.png`
        : `./img/imgProduct/product_icon.png`;

    return (
        <div className="Product_container">
            <div className="Product_top">
                <div className="Product_top_left">
                    <div className="Product_info">상품 정보</div>
                    <img src={productInfoImagePath} alt="상품정보아이콘" />
                </div>
                <div className="Product_top_right">
                    <img src={productIconImagePath} alt="상품아이콘" />
                </div>
            </div>
            <div className="Product_content">
                {list && list.imgUrl && (
                    <div className="Product_image">
                        <img src={list.imgUrl} alt="상품이미지"></img>
                    </div>
                )}
                <div className="Product_detail_info">
                    <div className="Product_name">
                        <div className="Product_type">제품명</div>
                        {list && <div className="Product_info">{list.name}</div>}
                    </div>
                    <div className="Product_location">
                        <div className="Product_type">지역</div>
                        {list && <div className="Product_info">{list.seller}</div>}
                    </div>
                    <div className="Product_other_info">
                        <div className="Product_delivery">
                            <div className="Product_type">배달 방법</div>
                            {list && <div className="Product_info">
                                {list.deliveryType === 'PACKAGE' ? '택배 배송' : '직접 배송'}
                            </div>}
                        </div>
                        <div className="Product_price">
                            <div className="Product_type">가격</div>
                            {list && <div className="Product_info">{list.price}원</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;