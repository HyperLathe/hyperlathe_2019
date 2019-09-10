import React from "react";
import Content from "../content/content.json";

const pageData = (Content[0].page[1]);


function About(props) {
  return (
    <div className="About">
      <h2>About</h2>
      <h3>About content</h3>
      <div className="categories">
      {Object.entries(pageData.body_01_categories).map(([key, value]) => {
        return (<div key={key} className="categories_block"><h3>{key}:</h3> <p>{value}</p></div>)
      })}
      </div>
    </div>
  );
}

export default About;
