import React from "react";
import { Link, Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <div>
        <header>
          <Link to="/">
            <div className="icon">sadfsadf</div>
          </Link>
          <button className="login">SIGN IN</button>
          <div className="bar"></div>
        </header>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
