import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MainPage, AboutPage, ErrorPage, UserDetailPage, HelloWorld } from "../pages";
import Users from "../users/Users";
import UsersForTest from "../components/UsersForTest/UsersForTest";

const AppRouter = (props) => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="about" element={<AboutPage />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/users/:id" element={<UserDetailPage />}></Route>
      <Route path="/users-test" element={<UsersForTest/>}></Route>
      <Route path="/hello" element={<HelloWorld />}></Route>
      <Route path="/*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default AppRouter;
