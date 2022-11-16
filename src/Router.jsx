import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../src/Header";
import Home from "./screens/Home";
import Skills from "./screens/Skills";
import Projects from "./screens/Projects";
import Pricing from "./screens/Pricing";
import Contacts from "./screens/Contacts";
import Footer from "./Footer";

export const MyRoutes = {
  HOME: "/",
  SKILLS: "/skills",
  PROJECTS: '/projects',
  PRICING: "/pricing",
  CONTACTS: "/contacts",
};

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={MyRoutes.HOME} element={<Home />} />
          <Route path={MyRoutes.SKILLS} element={<Skills />} />
          <Route path={MyRoutes.PROJECTS} element={<Projects />} />
          <Route path={MyRoutes.PRICING} element={<Pricing />} />
          <Route path={MyRoutes.CONTACTS} element={<Contacts />} />
        </Routes>
      </BrowserRouter>
        <Footer/>
    </div>
  );
};
export default Router;
