import React from "react";
import { useNavigate } from "react-router-dom";
import Video from "./Video";
import "./sass/style.scss";
import "./sass/home.scss"
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
        <div className="ferst" onClick={() => navigate("ferst")}> <img src="https://main-cdn.sbermegamarket.ru/hlr-system/-6/39/89/38/79/10/2/600002402423b0.jpeg" alt="" /></div>
        <div className="ferst" onClick={() => navigate("secont")}> <img src="https://cdna.artstation.com/p/top_row_items/images/000/002/358/default/c18cbe48ad11c7ed.jpg?1656005899" alt="" /> </div>
        <div className="ferst" onClick={() => navigate("there")}><img src="" alt="" /></div>
        <div className="ferst" onClick={() => navigate("five")}></div>
        <div className="ferst" onClick={() => navigate("seven")}></div>
      </div>
      <div className="resorch">
        <div className="bar_sorch"></div>
        <div className="exelnt"><i id="cop"  className='fas'>&#xf14e;</i>   Explore  </div>
        <div className="over_chus">
          <div className="fenezi"><span>Fantezi</span></div>
          <div className="marvel">Marvel</div>
          <div className="going">Horror</div>
        </div>
      </div>
      <Video />
    </div>
  );
}

export default Home;
