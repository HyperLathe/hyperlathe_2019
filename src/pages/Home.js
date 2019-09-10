
import React from "react";
import Content from "../content/content.json";
import ProfilePic from "../img/richardyoung.jpg"

const pageData = (Content[0].page[0]);

function Home() {
  return (
    <div className="Home">
      <div className="Header">
        <h2>{pageData.title}</h2>
      </div>
      <div>
        <div>
          <h3>{pageData.headline}</h3>
          <p>{pageData.body[0]}</p>
          <p>{pageData.body[1]}</p>
          <p>{pageData.body[2]}</p>
          <p>{pageData.body[3]}</p>
          <p>{pageData.body[4]}</p>
        </div>
        <div>
          <img src={ProfilePic} className="img-fluid" alt="Richard" />
        </div>
      </div>
    </div>
  );
}


export default Home;