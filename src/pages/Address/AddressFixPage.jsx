import React, { useEffect, useState } from "react";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/Address/AddressFixPage.css";
import AddressFixForm from "../../components/Address/AddressFixForm";

const AddressFixPage = ({ PROXY, addressList, fixNum }) => {
  useEffect(() => {
    if (fixNum === -1) {
      window.location.replace("/main");
    }
  }, []);

  return (
    fixNum !== -1 && (
      <>
        <SubHeader page={"배송지 수정"} />
        <AddressFixForm
          PROXY={PROXY}
          item={addressList.delivery_address[fixNum]}
        />
      </>
    )
  );
};

export default AddressFixPage;
