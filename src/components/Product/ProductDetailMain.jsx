import react from "react";
import "../../styles/Product/ProductDetailMain.css";

const ProductDetailMain = ({ product }) => {
    return (
        <div className="ProductDetailMain_container">
            <div className="ProductDetailMain_image">
                <img src={product.img_url} alt="상품이미지"></img>
            </div>
            <div className="ProductDetailMain_content">
                <div className="ProductDetailMain_content_top">
                    <div className="ProductDetailMain_content_name">{product.name}</div>
                    <div className="Product_image">
                        <img src="../img/imgProduct/item_icon.png" alt="상품아이콘"></img>
                    </div>
                </div>
                <div className="ProductDetailMain_content_info">
                    <div className="product_info">상품정보</div>
                    <div className="ProductDetailMain_content_info_bottom">
                        <div className="ProductDetailMain_content_info_left">
                            <div className="ProductDetail_address">{product.seller}</div>
                            <div className="ProductDetail_price">{product.price}원</div>
                        </div>
                        <div className="rating">
                            <img src={`../img/imgProduct/rating${product.rating}.png`}></img>
                        </div>
                        <div className="grade_info">
                            <div className="grade">
                                평점
                            </div>
                            <div className="my_grade">
                                <div className="my_grade_">{product.rating} </div>
                                <div>/5</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ProductDetailMain_coment">
                현재 보고 계신 상품
            </div>
        </div>
    )
}

export default ProductDetailMain;