import React from "react";
import moment from "moment";

const Greetings = ({ name = "Women Who Code" }) => {
  console.log(moment().format("LTS"));
  return (
    <React.Fragment>
      <header className="greeting">
        <span className="current-time">{moment().format("LT")}</span><br></br>
        <span className="name">Hi, {name}</span>
      </header>
    </React.Fragment>
  );
};
export default Greetings;
