import React from "react";
import styled from 'styled-components';

const Category = styled.div `
background: #d2d2d2;
display: flex;
flex-direction: column;
  h3 {
    color: red;
  }

`;


function CategoryBlock(props) {
  return (
    <Category key={props.title}>
        <h3>{props.title}:</h3>
        <p>{props.value}</p>
      </Category>
  );
}

export default CategoryBlock;