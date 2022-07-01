import React from "react";
import { useNavigate } from "react-router-dom";
import "./sass/style.scss";
import Video from "./Video";

function Home() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="links">
        <div onClick={() => navigate("/about")} className="one">
          about
        </div>
      </div>
      <div className="header_video">
        <div className="ferst" onClick={() => navigate("ferst")}> <img src="https://cdnb.artstation.com/p/top_row_items/images/000/002/357/default/d185068b7c3ecf66.jpg?1656005680" alt="" /></div>
        <div className="ferst" onClick={() => navigate("secont")}> <img src="https://cdna.artstation.com/p/top_row_items/images/000/002/358/default/c18cbe48ad11c7ed.jpg?1656005899" alt="" /> </div>
        <div className="ferst" onClick={() => navigate("there")}><img src="https://cdna.artstation.com/p/top_row_items/images/000/002/358/default/c18cbe48ad11c7ed.jpg?1656005899" alt="" /></div>
        <div className="ferst" onClick={() => navigate("five")}></div>
        <div className="ferst" onClick={() => navigate("seven")}></div>
      </div>
      <div className="resorch">
        <div className="bar_sorch"></div>
        <div className="exelnt"></div>
      </div>
      <Video />
    </div>
  );
}

export default Home;
