import React from "react";
import "./maintitle.css";

const MainTitle = (props) => {
  return (
    <div className="jupiter__home section__padding">
      <div className="jupiter__home-h1">
        <h1 className="jupiter__gradient-text">{props.children}</h1>
      </div>
    </div>
  );
};

export default MainTitle;
