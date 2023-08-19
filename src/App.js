import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Account/LoginPage";
import MainPage from "./pages/Main/MainPage";
import RedirectGuestLogin from "./pages/RedirectGuestLogin";
import CategoryPage from "./pages/Category/CategoryPage";
import ProductPage from "./pages/Product/ProductPage";
import ProductDetailPage from "./pages/Product/ProductDetailPage";
import MyPage from "./pages/MyPage/MyPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCartPage";
import PurchasePage from "./pages/Purchase/PurchasePage";
import GroupPage from "./pages/Group/GroupPage";
import GroupAddPage from "./pages/Group/GroupAddPage";
import OrderListPage from "./pages/OrderList/OrderListPage";
import AddressPage from "./pages/Address/AddressPage";
import ReviewPage from "./pages/Review/ReviewPage";
import PointPage from "./pages/Point/PointPage";
import { useLoginStore } from "./components/Account/Store";
import AddressAddPage from "./pages/Address/AddressAddPage";
import { useEffect, useState, useRef } from "react";
import AddressFixPage from "./pages/Address/AddressFixPage";
import axios from "axios";
import SellerLogin from "./pages/SellerAccount/SellerLogin";
import SellerJoin from "./pages/SellerAccount/SellerJoin";
import SellerMyPage from "./pages/SellerMyPage/SellerMyPage";
import ScrollTop from "./ScrollTop";
import SellerOrdersPage from "./pages/SellerOrders/SellerOrdersPage";
import SellerProductAddPage from "./pages/SellerProductAdd/SellerProductAddPage";

function App() {
  const { access_token, token_set } = useLoginStore();
  const PROXY = process.env.REACT_APP_PROXY;
  const appRef = useRef(null);

  const [userData, setUserData] = useState();
  const [isUserLoading, setIsUserLoading] = useState(true);

  /** 상품 구매 (at 상품 디테일, at 장바구니)
   *   [{ productId: number, quantity: number }]
   */
  const [purchaseDetail, setPurchaseDetail] = useState(null);
  const [cartSelectedItemForPurchase, setCartSelectedItemForPurchase] =
    useState(null);

  // 판매자 주문 조회 관련
  const [productID, setProductID] = useState();

  // 주소지 관련 정보
  const [addressList, setAddressList] = useState({
    delivery_address: [],
  });

  // 주소지 수정 관련
  const [fixNum, setFixNum] = useState(-1);

  useEffect(() => {
    setIsUserLoading(true);
    axios
      .get(`${PROXY}/api/user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        setUserData(res.data);
        setIsUserLoading(false);
      })
      .catch((err) => {
        setIsUserLoading(false);
      });
  }, []);

  return (
    <div className="App" ref={appRef}>
      <BrowserRouter>
        <ScrollTop appRef={appRef} />
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                access_token={access_token}
                token_set={token_set}
                PROXY={PROXY}
                setUserData={setUserData}
              />
            }
          ></Route>
          <Route
            path="/main"
            element={
              <MainPage
                PROXY={PROXY}
                userData={userData}
                setUserData={setUserData}
              />
            }
          ></Route>
          <Route
            path="/category"
            element={<CategoryPage PROXY={PROXY} />}
          ></Route>
          <Route
            path="/search"
            element={<ProductPage PROXY={PROXY} appRef={appRef} />}
          ></Route>
          <Route
            path="/productDetail/:id"
            element={
              <ProductDetailPage
                PROXY={PROXY}
                setPurchaseDetail={setPurchaseDetail}
              />
            }
          ></Route>
          <Route
            path="/mypage"
            element={
              <MyPage userData={userData} isUserLoading={isUserLoading} />
            }
          ></Route>
          <Route path="/group" element={<GroupPage PROXY={PROXY} />}></Route>
          <Route
            path="/groupAdd"
            element={<GroupAddPage PROXY={PROXY} />}
          ></Route>
          <Route
            path="/orderlist"
            element={<OrderListPage PROXY={PROXY} />}
          ></Route>
          <Route
            path="/address"
            element={
              <AddressPage
                PROXY={PROXY}
                addressList={addressList}
                setAddressList={setAddressList}
                setFixNum={setFixNum}
              />
            }
          ></Route>
          <Route
            path="/addressAdd"
            element={<AddressAddPage PROXY={PROXY} />}
          ></Route>
          <Route
            path="/addressFix"
            element={
              <AddressFixPage
                PROXY={PROXY}
                addressList={addressList}
                fixNum={fixNum}
              />
            }
          ></Route>
          <Route path="/review" element={<ReviewPage />}></Route>
          <Route
            path="/shoppingCart"
            element={
              <ShoppingCart
                PROXY={PROXY}
                setPurchaseDetail={setPurchaseDetail}
                setCartSelectedItemForPurchase={setCartSelectedItemForPurchase}
              />
            }
          ></Route>
          \
          <Route
            path="/purchase"
            element={
              <PurchasePage
                PROXY={PROXY}
                userData={userData}
                purchaseDetail={purchaseDetail}
                setPurchaseDetail={setPurchaseDetail}
                cartSelectedItemForPurchase={cartSelectedItemForPurchase}
              />
            }
          ></Route>
          <Route
            path="/point"
            element={<PointPage PROXY={PROXY} userData={userData} />}
          ></Route>
          <Route
            path="/point"
            element={<PointPage PROXY={PROXY} userData={userData} />}
          ></Route>
          <Route
            path="/sellerlogin"
            element={<SellerLogin PROXY={PROXY} />}
          ></Route>
          <Route
            path="/sellerjoin"
            element={<SellerJoin PROXY={PROXY} />}
          ></Route>
          <Route
            path="/sellerMyPage"
            element={<SellerMyPage PROXY={PROXY} setProductID={setProductID} />}
          ></Route>
          <Route
            path="/sellerProductsOrders"
            element={<SellerOrdersPage PROXY={PROXY} productID={productID} />}
          ></Route>
          <Route
            path="/group/login"
            element={<RedirectGuestLogin PROXY={PROXY} />}
          ></Route>
          <Route
            path="/sellerProductAddPage"
            element={<SellerProductAddPage PROXY={PROXY} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// 와일드카드 형태로 해도 이미지가 깨지는 것을 방지하지 못함
// function Address() {
//   return (
//     <Routes>
//       <Route path="" element={<AddressPage />} />
//       <Route path="add" element={<AddressAddPage />} />
//     </Routes>
//   );
// }
