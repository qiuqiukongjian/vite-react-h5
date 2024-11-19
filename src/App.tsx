/*
 * @Description: 
 * @Author: sunfanghui
 * @Date: 2024-11-19 16:20:58
 * @LastEditors: sunfanghui
 * @LastEditTime: 2024-11-19 21:33:48
 */
// App.tsx 修改代码
import type { FC } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UseHomer from './pages/home';

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
