import React from "react";

const DeliveryType = ({
  productForm,
  setProductForm,
  delivery,
  setDelivery,
}) => {
  const onDelivery = (e) => {
    setDelivery(e.currentTarget.value);
    setProductForm({ ...productForm, delivery_type: e.currentTarget.value });
  };

  return (
    <div className="DeliveryType_container">
      <div className="DeliveryType_header">제품 배송 방법</div>
      <div className="DeliveryType_text">
        <select onChange={onDelivery}>
          <option value="DIRECT">직거래</option>
          <option value="PACKAGE">택배 배송</option>
        </select>
      </div>
    </div>
  );
};

export default DeliveryType;
