import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./sass/style.scss";
import "./sass/layout.css";
function Layout() {
  return (
    <>
      <div>
        <header>
          <Link to="/">
            <div className="icon">
              <img
                src="https://antlere.com/wp-content/uploads/2019/05/cx.png"
                alt="404"
              />
              <span id="icon_text">Viuw</span>
            </div>
          </Link>
          <form>
            <input type="text" id="input_sorch"/>
          </form>
          <button className="login">SIGN IN</button>
          <div className="bar"></div>
        </header>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
