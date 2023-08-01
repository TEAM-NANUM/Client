import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Account/LoginPage";
import CategoryPage from "./pages/Category/CategoryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/category" element={<CategoryPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
