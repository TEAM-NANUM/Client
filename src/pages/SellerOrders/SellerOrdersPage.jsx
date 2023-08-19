import axios from "axios";
import React, { useEffect, useState } from "react";
import SubHeader from "../../components/SubHeader";
import "../../styles/SellerOrders/SellerOrdersPage.css";
import SellerOrdersItem from "../../components/SellerOrders/SellerOrdersItem";

const SellerOrdersPage = ({ PROXY, productID }) => {
  const [productOrderData, serProductOrderData] = useState();

  useEffect(() => {
    if (!productID) {
      window.location.replace("/sellerMyPage");
    } else {
      axios
        .get(`${PROXY}/api/seller/${productID}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((res) => serProductOrderData(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      <SubHeader page={"주문 관리"} />
      <div className="SellerOrdersPage_container">
        {productOrderData &&
          productOrderData.orders.map((item, idx) => (
            <SellerOrdersItem
              key={idx}
              item={item}
              datas={productOrderData}
              PROXY={PROXY}
            />
          ))}
      </div>
    </>
  );
};

export default SellerOrdersPage;
