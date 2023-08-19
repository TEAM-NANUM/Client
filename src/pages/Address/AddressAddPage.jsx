import React from "react";
import SubHeader from "../../components/SubHeader";
import Footer from "../../components/Footer/Footer";
import "../../styles/Address/AddressAddPage.css";
import AddressAddForm from "../../components/Address/AddressAddForm";

const AddressAddPage = ({ PROXY }) => {
  return (
    <>
      <SubHeader page={"배송지 추가"} useX />
      <AddressAddForm PROXY={PROXY} />
    </>
  );
};

export default AddressAddPage;
