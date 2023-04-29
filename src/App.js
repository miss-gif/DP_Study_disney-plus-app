import styled from "styled-components";
import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Row from "./components/Row";
import requests from "./api/request";
import DetailPage from "./pages/DetailPage";
import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/index";
import SearchPage from "./pages/MainPage/index";
import LoginPage from "./pages/MainPage/index";

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
