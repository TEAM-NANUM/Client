import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/Main/NewItem.css";

const AllReview = ({ PROXY }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [limitItems, setLimitItems] = useState(4);

  useEffect(() => {
    axios
      .get(`${PROXY}/api/reviews/all`, {
        params: {
          limit: limitItems,
        },
      })
      .then((res) => {
        console.log(res.data.reviews);
        setProducts(res.data.reviews);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [PROXY, limitItems]);

  return (
    <div style={{ marginBottom: "50px" }}>
      <div className="pop_header">
        <div className="pop_header_txt">
          <span className="pop_span">실시간 후기</span>
        </div>
      </div>
      {products.map((product, index) => (
        <>
          <div
            className="main_review"
            onClick={() => navigate(`/productDetail/${product.productId}`)}
          >
            <span className="main_review_user">{product.userName}</span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "360px",
              }}
            >
              <div
                style={{
                  width: "260px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="main_review_comment"
                  style={{ wordBreak: "break-all", wordWrap: "breakWord" }}
                >
                  {product.comment.length <= 40
                    ? product.comment
                    : product.comment.slice(0, 40) + "..."}
                </div>
                <img
                  style={{
                    marginBottom: "4px",
                    marginTop: "auto",
                    objectFit: "cover",
                    width: "70px",
                  }}
                  src={`./img/imgProduct/${product.rating}.svg`}
                  alt="평점"
                />
              </div>
              <div>
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "4px ",
                    width: "58px",
                    height: "58px",
                  }}
                  src={product.img_url}
                  alt="평점"
                />
              </div>
            </div>
          </div>
          {index !== products.length - 1 && (
            <div
              style={{
                margin: "0 0 12px 0",
                height: "0.1px",
                backgroundColor: "#e7e7e7",
              }}
            ></div>
          )}
        </>
      ))}

      <div
        style={{
          display: "flex",
          width: "92%",
          fontSize: "14px",
          height: "45px",
          borderRadius: "11px",
          backgroundColor: "white",
          border: "0.5px solid lightgray",
          alignItems: "center",
          justifyContent: "center",
          color: "#565656",
          fontWeight: "500",
          cursor: "pointer",
          margin: "12px auto auto auto",
        }}
        onClick={() => {
          setLimitItems(limitItems + 5);
        }}
      >
        더보기 +
      </div>
    </div>
  );
};

export default AllReview;
