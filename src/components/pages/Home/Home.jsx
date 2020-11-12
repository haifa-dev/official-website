import React, { createRef, useEffect } from "react";
import TeamCardsGrid from "../../TeamCardsGrid/TeamCardsGrid";
import About from "./About";
import Contact from "./Contact";

/**
 * The home page.
 *
 * @author [David Klein, Polarts](https://github.com/Polarts)
 * @author [Dnku Mekonen](https://github.com/Dnku)
 */

const Home = (props) => {
  const list = ["home", "about", "contact", "team"];
  const refs = list.reduce((acc, hash) => {
    acc[hash] = createRef();
    return acc;
  }, {});

  useEffect(() => {
    if (props.location.state) {
      refs[props.location.state].current.scrollIntoView({
        behavior: "smooth",
        block:
          props.location.state === "about" || props.location.state === "contact"
            ? "center"
            : "start",
      });
    }
  });

  return (
    <div className="home" id="home" ref={refs.home}>
      <div className="jambo bg-secondary">
        <div className="landing-page">
          <h1 className="logo">
            haifa<span>:dev</span>
          </h1>
          <h4 className="logo">
            <span>developers</span> community
          </h4>
        </div>
      </div>
      <div className="container">
        <h2>
          Developers of Haifa <b>unite!</b>
        </h2>
        <section ref={refs.about}>
          <About />
        </section>

        <section ref={refs.contact}>
          <Contact />
        </section>

        <section ref={refs.team}>
          <h2 id="team">Meet our team members:</h2>
          <TeamCardsGrid />
        </section>
      </div>
    </div>
  );
};

export default Home;
