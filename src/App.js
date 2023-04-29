import "./App.css";
import Nav from "./components/Nav";
import DetailPage from "./pages/DetailPage";
import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/MainPage";
import LoginPage from "./pages/MainPage";
// import styled from "styled-components";
// import Banner from "./components/Banner";
// import Category from "./components/Category";
// import Row from "./components/Row";
// import requests from "./api/request";

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
