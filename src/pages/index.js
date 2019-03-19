import React from "react"
import { Link } from "gatsby"

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 700 }}>
    <span>
      <img
        className="nvj-logo"
        src={require("../images/novajed.png")}
        alt="novajed logo"
      />
      <Link to="/about" class="abt">
        About
      </Link>
    </span>
    <br />
    <h1 className="nvj-name">
      Novajed /v2.0{" "}
      <span role="img" aria-label="confetti ball">
        🎊
      </span>
    </h1>
    <p className="intro">
      I'm a front end-focused Software Developer. A generalist, but currently
      enjoying React and Vue.js.
    </p>
    <br />
    <section className="sec">
      <p className="sec-title">Projects</p>

      <a
        href="https://www.365flix.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h4>>> 365Flix</h4>
      </a>

      <p>Video on demand streaming service in Vue.js</p>
      <a
        href="http://ognova.surge.sh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h4>>> React Portfolio 1.0</h4>
      </a>
      <p>The first iteration of my portfolio site. Minimal design.</p>
    </section>
    <section className="sec">
      <p className="sec-title">Compotencies</p>
      <ul>
        <li>
          <h4>Code</h4>
        </li>
        <li>
          <p>HTML</p>
        </li>
        <li>
          <p>CSS</p>
        </li>
        <li>
          <p>JavaScript</p>
        </li>
        <li>
          <p>React</p>
        </li>
        <li>
          <p>Vue.js</p>
        </li>
        <li>
          <p>Bootstrap</p>
        </li>
      </ul>
      <ul>
        <li>
          <h4>Art</h4>
        </li>
        <li>
          <a
            href="https://500px.com/novajed"
            target="_blank"
            rel="noopener noreferrer"
          >
            Photography
          </a>
        </li>
        <li>
          <a
            href="https://soundcloud.com/novajed/tracks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Music Production
          </a>
        </li>
      </ul>
    </section>
    <section className="sec">
      <p className="sec-title">Experience</p>

      <h4>
        Front End Developer,{" "}
        <a
          href="https://www.365flix.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          365Flix
        </a>
      </h4>
      <p>2018 - present</p>
      <br />
      <h4>Freelance Web Developer</h4>
      <p>2017 - 2018</p>
    </section>
  </div>
)
