import react from "react";
import "../../styles/ShoppingCart/ShoppingCartPage.css"
import SubHeader from "../../components/SubHeader";
import ShoppingCartList from "../../components/ShoppingCart/ShoppingCartList"
import ShoppingCartSelect from "../../components/ShoppingCart/ShoppingCartSelect";
import Footer from "../../components/Footer/Footer";

const ShoppingCartPage = () => {
    return (
        <div className="ShoppingCartPage_container">
            <SubHeader page={'장바구니'}></SubHeader>
            <div className='ShoppingCartPage_top'>
                <div className='ShoppingCartPage_top_left'>
                    <div>장바구니</div>
                    <img src='./img/imgShoppingCart/ShoppingCart_icon.png' alt='장바구니 아이콘'></img>
                </div>
                <div className='ShoppingCartPage_top_right'>
                    <div className="select_radius"></div>
                    <div>전체선택</div>
                </div>
            </div>
            <div className="ShoppingCartList">
                <ShoppingCartList></ShoppingCartList>
            </div>
            <ShoppingCartSelect></ShoppingCartSelect>
            <Footer></Footer>
        </div>
    )
}

export default ShoppingCartPage;