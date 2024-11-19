/*
 * @Description: 
 * @Author: sunfanghui
 * @Date: 2024-11-19 16:20:58
 * @LastEditors: sunfanghui
 * @LastEditTime: 2024-11-19 16:29:32
 */
// App.tsx 修改代码
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import UseHomer from "./pages/home";

const UseApp: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UseHomer />}></Route>
      </Routes>
    </>
  );
};

export default UseApp;