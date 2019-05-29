
import React from "react";
import Content from "./content/content.json";
import ProfilePic from "./img/richardyoung.jpg"

const pageData = (Content[0].page[0]);

function Home() {
  return (
    <div className="Home">
      <div className="top-section">
        <h2>{pageData.title}</h2>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6">
          <h3>{pageData.headline}</h3>
          {/* This could be done with a loop. for example see below: */}
    
          {/* version without a loop */}
          <p>{pageData.bodycopy[0]}</p>
          <p>{pageData.bodycopy[1]}</p>
          <p>{pageData.bodycopy[2]}</p>
          <p>{pageData.bodycopy[3]}</p>
          <p>{pageData.bodycopy[4]}</p>
    
          {/* Version with a loop */}
          {
            pageData.bodycopy.map(copy => (
              <p>{copy}</p>
            ))
          }
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6">
          <img src={ProfilePic} className="img-fluid" alt="Richard" />
        </div>
      </div>
    </div>
  );
}


export default Home;
