import React from "react";
import moment from "moment";

const Greetings = () => {
  //console.log(moment().format())
  return (
    <React.Fragment>
      <section className="hero">
        <div className="hero-body has-text-centered">
          <header className="title is-large">
            <span className="time">{moment().format("h:mm")}</span>
          </header>
          <header className="subtitle">
            <span className="text">
              Good evening, <b>WWCode Manila</b>
            </span>
          </header>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Greetings;
