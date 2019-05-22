import React from "react";
import style from "./indicator.module.css";

const Indicator = props => {
  return (
    <div className={style.frame}>
      <div className={style.number}>{props.number}</div>
      <div className={style.indicator}>{props.indicator}</div>
    </div>
  );
};

export default Indicator;
