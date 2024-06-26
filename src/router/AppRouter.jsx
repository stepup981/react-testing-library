import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MainPage, AboutPage, ErrorPage, UserDetailPage } from "../pages";
import Users from "../users/Users";

const AppRouter = (props) => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="about" element={<AboutPage />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/users/:id" element={<UserDetailPage />}></Route>
      <Route path="/*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default AppRouter;
