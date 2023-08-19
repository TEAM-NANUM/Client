import React from "react";
import "../../styles/Address/AddressItem.css";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const AddressItem = ({ getAddress, PROXY, addressList, item, setFixNum }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const onDelete = () => {
    axios
      .delete(`${PROXY}/api/delivery-address/${item.delivery_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => alert(`선택한 배송지가 삭제되었습니다.`))
      .then((res) => getAddress())
      .catch((err) => console.log(err));
  };

  const onDefault = () => {
    axios
      .put(
        `${PROXY}/api/delivery-address/default?id=${item.delivery_id}`,
        item.delivery_id,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((res) => console.log(res))
      .then((res) => alert(`선택한 배송지가 기본 배송지로 설정되었습니다.`))
      .then((res) => getAddress())
      .catch((err) => console.log(err));
  };

  const onFixForm = () => {
    setFixNum(
      addressList.delivery_address.findIndex(
        (i) => i.delivery_id === item.delivery_id
      )
    );
    navigate("/addressFix?purchase=" + searchParams.get("purchase") || "");
  };

  return (
    <div className="address_man_item_wrapper">
      <div className="address_man_item_name">
        <div>{`${item.receiver} (${item.nickname})`}</div>
        {item.is_default && (
          <div className="address_man_item_default">기본배송지</div>
        )}
      </div>
      <div className="address_man_item_phone">{item.phone_number}</div>
      <div className="address_man_item_address">{`(${item.address.zipCode}) ${item.address.defaultAddress} ${item.address.detailAddress}`}</div>
      <div className="address_man_item_btn_container">
        <div className="address_man_item_btn" onClick={onFixForm}>
          수정
        </div>
        <div className="address_man_item_btn" onClick={onDelete}>
          삭제
        </div>
        {item.is_default === false && (
          <div className="address_man_item_btn" onClick={onDefault}>
            기본 배송지로
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressItem;
