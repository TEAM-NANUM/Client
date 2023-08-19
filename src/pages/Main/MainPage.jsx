import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Main/Header";
import Carousel from "../../components/Main/Carousel";
import PopularItem from "../../components/Main/PopularItem";
import AllReview from "../../components/Main/AllReview";
import Footer from "../../components/Footer/Footer";
import { useLoginStore } from "../../components/Account/Store";
import axios from "axios";

const MainPage = ({ PROXY, userData, setUserData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${PROXY}/api/user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div
        style={{
          marginTop: "53px",
          backgroundColor: "#fff",
        }}
      >
        <Carousel PROXY={PROXY}></Carousel>
        <PopularItem PROXY={PROXY}></PopularItem>
        <AllReview PROXY={PROXY} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
