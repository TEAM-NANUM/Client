import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Account/LoginPage";
import MainPage from "./pages/Main/MainPage";
import CategoryPage from "./pages/Category/CategoryPage";
import MyPage from "./pages/MyPage/MyPage";
import GroupPage from "./pages/Group/GroupPage";
import GroupAddPage from "./pages/Group/GroupAddPage";
import OrderListPage from "./pages/OrderList/OrderListPage";
import AddressPage from "./pages/Address/AddressPage";
import ReviewPage from "./pages/Review/ReviewPage";
import PointPage from "./pages/Point/PointPage";
import { useLoginStore } from "./components/Account/Store";
import AddressAddPage from "./pages/Address/AddressAddPage";
import { useState } from "react";

function App() {
  const { access_token, token_set } = useLoginStore();
  const PROXY = process.env.REACT_APP_PROXY;

  const [userData, setUserData] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                access_token={access_token}
                token_set={token_set}
                PROXY={PROXY}
              />
            }
          ></Route>
          <Route
            path="/main"
            element={<MainPage PROXY={PROXY} setUserData={setUserData} />}
          ></Route>
          <Route
            path="/category"
            element={<CategoryPage PROXY={PROXY} />}
          ></Route>
          <Route
            path="/mypage"
            element={<MyPage userData={userData} />}
          ></Route>
          <Route path="/group" element={<GroupPage />}></Route>
          <Route path="/group/add" element={<GroupAddPage />}></Route>
          <Route path="/orderlist" element={<OrderListPage />}></Route>
          <Route path="/address" element={<AddressPage />}></Route>
          <Route path="/addressAdd" element={<AddressAddPage />}></Route>
          <Route path="/review" element={<ReviewPage />}></Route>
          <Route path="/point" element={<PointPage />}></Route>
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
