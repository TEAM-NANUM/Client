import react from "react";
import "../../styles/Product/ProductDetailMain.css";

const ProductDetailMain = ({ product }) => {
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
  const formattedRating = getFormattedRating(product.rating); // 평점 변환
  return (
    product.price && (
      <div style={{ padding: "0 4px" }}>
        <div
          className="search_list_detail"
          style={{ cursor: "default", width: "290px" }}
        >
          <div
            className="search_seller"
            style={{
              color: "#9b9b9b",
              marginTop: "10px",
              marginBottom: "13px",
            }}
          >
            {product.seller}
          </div>
          <div
            className="search_prod_name"
            style={{
              fontWeight: "500",
              fontSize: "18px",
              marginBottom: "12px",
            }}
          >
            {product.name}
          </div>
          <div>
            <img
              style={{
                objectFit: "cover",
                width: "80px",
                marginBottom: "12px",
              }}
              src={`../img/imgProduct/${formattedRating}.svg`}
              alt="star"
            />
          </div>
          <div
            className="search_prod_price"
            style={{ fontWeight: "600", fontSize: "18px", marginBottom: "8px" }}
          >
            {product.price.toLocaleString()}원
          </div>
          <div className="search_prod_pack" style={{}}>
            {product.deliveryType === "PACKAGE"
              ? "택배 배송 상품"
              : "직배송 상품"}
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetailMain;
