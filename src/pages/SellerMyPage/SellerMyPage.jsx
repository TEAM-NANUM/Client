import axios from "axios";
import React, { useEffect, useState } from "react";
import SubHeader from "../../components/SubHeader";
import SellerFooter from "../../components/Footer/SellerFooter";
import SellerProfil from "../../components/SellerMyPage/SellerProfil";
import "../../styles/SellerMyPage/SellerMyPage.css";
import SellerProducts from "../../components/SellerMyPage/SellerProducts";

const SellerMyPage = ({ PROXY, setProductID }) => {
  const [sellerInfo, setSellerInfo] = useState();

  const [sellerProduct, setSellerProduct] = useState();

  useEffect(() => {
    axios
      .get(`${PROXY}/api/seller`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => setSellerInfo(res.data))
      .catch((err) => console.log(err));

    axios
      .get(`${PROXY}/api/seller/products`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => setSellerProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <SubHeader page={"마이페이지"} />
      <div className="sellsrMyPage_container">
        {sellerInfo && <SellerProfil PROXY={PROXY} sellerData={sellerInfo} />}
        {sellerProduct && (
          <SellerProducts
            sellerProduct={sellerProduct}
            sellerData={sellerInfo}
            setProductID={setProductID}
          />
        )}
      </div>
      <SellerFooter />
    </>
  );
};

export default SellerMyPage;
