import React from "react";
import AddressItem from "./AddressItem";
import "../../styles/Address/AddressList.css";

const AddressList = ({ getAddress, addressList, PROXY, setFixNum }) => {
  addressList.delivery_address.sort((a, b) => {
    if (a.is_default && !b.is_default) {
      return -1; // a가 b보다 앞으로 오도록 정렬
    } else if (!a.is_default && b.is_default) {
      return 1; // b가 a보다 앞으로 오도록 정렬
    }
    return 0; // 순서 변경이 필요하지 않음
  });

  return (
    addressList && (
      <div className="AddressList_container">
        {addressList.delivery_address.map((item, key) => (
          <AddressItem
            getAddress={getAddress}
            PROXY={PROXY}
            addressList={addressList}
            setFixNum={setFixNum}
            key={key}
            item={item}
          />
        ))}
      </div>
    )
  );
};

export default AddressList;
