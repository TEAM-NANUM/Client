import react from "react";
import "../../styles/Product/ProductDetailInfo.css";

const ProductDetailInfo = ({ product }) => {
    return (
        <div className="ProductDetailInfo_container">
            <div>{product.description}</div>
        </div>
    )
}

export default ProductDetailInfo;