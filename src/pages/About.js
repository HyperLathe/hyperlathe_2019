import React from "react";
import Content from "../content/content.json";
import CategoryBlock from "./components/CategoryBlock";

const pageData = (Content[0].page[1]);


function About() {
  return (
    <div className="About">
      <h2>About</h2>
      <h3>About content</h3>
      {Object.entries(pageData.body_01_categories).map(([title, value]) => {
        return (<CategoryBlock key={title} title={title} value={value} />)
      })}
      
    </div>
  );
}

export default About;
