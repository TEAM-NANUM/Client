import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../../styles/ShoppingCart/ShoppingCartPage.css";
import SubHeader from "../../components/SubHeader";
import ShoppingCartList from "../../components/ShoppingCart/ShoppingCartList";
import ShoppingCartSelect from "../../components/ShoppingCart/ShoppingCartSelect";
import Footer from "../../components/Footer/Footer";

const ShoppingCartPage = ({ PROXY }) => {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        axios.get(`${PROXY}/api/cart`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            }
        })
            .then((res) => {
                setShoppingCart(res.data.items);  // Only set the array of items
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleToggleSelect = (id) => {
        setSelectedItems(id)
    }

    const handleSelectDelete = async () => {
        try {
            const token = localStorage.getItem('access_token');

            await axios({
                method: 'post',
                url: `${PROXY}/api/cart/delete`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: {
                    item_ids: selectedItems
                }
            });

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="ShoppingCartPage_container">
            <SubHeader page={"장바구니"}></SubHeader>
            <div className="ShoppingCartPage_top">
                <div className="ShoppingCartPage_top_left">
                    <div>장바구니</div>
                    <img
                        src="./img/imgShoppingCart/ShoppingCart_icon.png"
                        alt="장바구니 아이콘"
                    ></img>
                </div>
                <div className="ShoppingCartPage_top_right">
                    <div
                        className={`select_radius ${selectAll ? "select" : ""}`}
                        onClick={handleSelectAll}
                    ></div>
                    <div>전체선택</div>
                </div>
            </div>
            <div className="ShoppingCartList">
                {shoppingCart.items &&
                    shoppingCart.items.map((item, index) => (
                        <ShoppingCartList
                            key={index}
                            PROXY={PROXY}
                            shoppingCart={item}
                            selectAll={selectAll}
                            isSelected={isSelected}
                            handleToggleSelect={handleToggleSelect}
                        ></ShoppingCartList>
                    ))}
            </div>
            <ShoppingCartSelect
                PROXY={PROXY}
                handleSelectDelete={handleSelectDelete}
            />
            <Footer></Footer>
        </div>
    );
};

export default ShoppingCartPage;