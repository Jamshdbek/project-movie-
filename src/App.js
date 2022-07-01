import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import NotFind from "./components/NotFind";
import Ferst from "./Video/Ferst"
import Secont from "./Video/Secont"
import There from "./Video/There"
import Four from "./Video/Four"
import Five from "./Video/Five"
import Seven from "./Video/Seven"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="ferst" element={<Ferst/>}/>
            <Route path="about" element={<About />} />
            <Route path="secont" element={<Secont/>}/>
            <Route path="there" element={<There/>}/>
            <Route path="four" element={<Four/>}/>
            <Route path="five" element={<Five/>}/>
            <Route path="seven" element={<Seven/>}/>

            <Route path="*" element={<NotFind />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
