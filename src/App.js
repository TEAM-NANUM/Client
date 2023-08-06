import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Account/LoginPage";
import MainPage from "./pages/Main/MainPage";
import CategoryPage from "./pages/Category/CategoryPage";
import ProductPage from "./pages/Product/ProductPage";
import MyPage from "./pages/MyPage/MyPage";
import GroupPage from "./pages/Group/GroupPage";
import GroupAddPage from "./pages/Group/GroupAddPage";
import OrderListPage from "./pages/OrderList/OrderListPage";
import AddressPage from "./pages/Address/AddressPage";
import ReviewPage from "./pages/Review/ReviewPage";
import PointPage from "./pages/Point/PointPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/category" element={<CategoryPage />}></Route>
          <Route path="/search" element={<ProductPage />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/group" element={<GroupPage />}></Route>
          <Route path="/group/add" element={<GroupAddPage />}></Route>
          <Route path="/orderlist" element={<OrderListPage />}></Route>
          <Route path="/address" element={<AddressPage />}></Route>
          <Route path="/review" element={<ReviewPage />}></Route>
          <Route path="/point" element={<PointPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
