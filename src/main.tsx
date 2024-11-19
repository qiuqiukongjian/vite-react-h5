/*
 * @Description: 
 * @Author: sunfanghui
 * @Date: 2024-11-19 16:20:58
 * @LastEditors: sunfanghui
 * @LastEditTime: 2024-11-19 17:03:36
 */
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "./tailwind.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);