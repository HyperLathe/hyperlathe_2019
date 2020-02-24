import React from "react";
import styled from "styled-components";
import Content from "../content/content.json";
import ProfilePic from "../img/richardyoung.jpg";
import PageHeader from "./components/PageHeader";

const pageData = Content[0].page[0];

const PageContent = styled.div `
  img {
    max-width: 100%;
  }
`;




function Home() {
  return (
    <PageContent>
      <PageHeader title={pageData.title} />
      <h3>{pageData.headline}</h3>
      <p>{pageData.body[0]}</p>
      <p>{pageData.body[1]}</p>
      <p>{pageData.body[2]}</p>
      <p>{pageData.body[3]}</p>
      <p>{pageData.body[4]}</p>
      <img src={ProfilePic} alt="Richard Young" />
    </PageContent>

  );
}


export default Home;