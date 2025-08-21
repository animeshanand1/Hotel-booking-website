import React from "react";
import Header from "../../layout/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
       
        <Outlet />
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default MainLayout;
