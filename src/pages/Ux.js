import React from "react";
import Content from "../content/content.json";

const pageData = (Content[0].page[1]);


function About() {
  return (
    <div className="UX">
      <h2 className="Header">{pageData.title}</h2>
      <h3>UX content</h3>
      <p>Lorem Ipsum</p>
    </div>
  );
}

export default About;
