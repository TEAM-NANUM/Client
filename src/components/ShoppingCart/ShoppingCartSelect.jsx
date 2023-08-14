import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/ShoppingCart/ShoppingCartSelect.css";

const ShoppingCartSelect = ({ PROXY, selectedItems, shoppingCart  }) => {
    const navigate = useNavigate();

    const calculateTotalPrice = () => {
        return shoppingCart.reduce((total, item) => {
          if (selectedItems.includes(item.id)) {
            return total + item.totalPrice;
          }
          return total;
        }, 0).toLocaleString();
    };

    return (
        <div className="ShoppingCartSelect_container">
            <div className={selectedItems.length === 0 ? "purchase_disable" : "select_purchase"}  onClick={() => navigate("/purchase")}>
                <> 
                    {
                        selectedItems.length === 0 ? "상품을 선택하세요" : 
                        <>
                            <p style={{lineHeight: "1.5",fontSize: "16px", margin: "0 0 0 8px", fontWeight: "500", color: "#ffffffbc"}}>총{" "}
                            <span style={{fontSize: "16px", margin: 0, fontWeight: "500"}}>{ selectedItems.length }</span>
                            개
                            </p>
                            <p style={{color: "#ffffffbc"}}>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</p>
                            <p>{calculateTotalPrice()}원 결제하기</p>
                        </>
                    }
                </>
            </div>
        </div>
    );
};

export default ShoppingCartSelect;