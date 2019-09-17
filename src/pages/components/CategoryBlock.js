import React from "react";
import styles from "../css/CategoryBlock.module.scss";

function CategoryBlock(props) {
  return (
    <div className={styles.category_block} key={props.title}><h3>{props.title}:</h3> <p>{props.value}</p></div>
  );
}

export default CategoryBlock;