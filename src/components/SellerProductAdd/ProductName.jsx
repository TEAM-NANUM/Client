import React from "react";

const ProductName = ({ productForm, setProductForm, name, setName }) => {
  const onName = (e) => {
    setName(e.currentTarget.value);
    setProductForm({ ...productForm, name: e.currentTarget.value });
  };

  return (
    <div className="ProductName_container">
      <div className="ProductName_header">제품 이름</div>
      <div className="ProductName_text">
        <input
          value={name}
          type="text"
          placeholder="판매 할 제품의 이름을 적어주세요."
          onChange={onName}
        />
      </div>
    </div>
  );
};

export default ProductName;
