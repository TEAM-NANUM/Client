import react from "react";
import "../../styles/Product/ProductDetailInfo.css";

const ProductDetailInfo = ({ product }) => {
  const markup = () => {
    return { __html: product.description };
  };

  return (
    <>
      <div
        style={{ fontSize: "14px", padding: "4px 0 0 10px" }}
        className="pay_span"
      >
        상품 정보
      </div>
      <div className="ProductDetailInfo_container" style={{ padding: "0 0" }}>
        <div
          className="ProductDetailInfo_box"
          dangerouslySetInnerHTML={markup()}
        />
      </div>
    </>
  );
};

export default ProductDetailInfo;
