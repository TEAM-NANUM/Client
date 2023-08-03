import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Account/LoginPage";
import MainPage from "./pages/Main/MainPage";
import CategoryPage from "./pages/Category/CategoryPage";
import MyPage from "./pages/MyPage/MyPage";
import GroupPage from "./pages/Group/GroupPage";
import GroupAddPage from "./pages/Group/GroupAddPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/category" element={<CategoryPage />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/group" element={<GroupPage />}></Route>
          <Route path="/group/add" element={<GroupAddPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
