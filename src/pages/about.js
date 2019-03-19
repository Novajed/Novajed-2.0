import React from "react"
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 700 }}>
    <img
      className="nvj-logo"
      src={require("../images/novajed.png")}
      alt="novajed logo"
    />
    <Link to="/" class="abt">
      Back
    </Link>
    <br />
    <h1>Novajed | DJ Lott</h1>
    <p>Today’s technology allows for remarkable things.</p>
    <p>
      I currently enjoy exploring the myriad possibilities within front end
      development, music production, and photography.
    </p>
    <p>
      If you'd like to share a project idea with me or have any questions,
      please don't hesitate to contact me below.
    </p>
    <br />
    <div className="social">
      <a href="mailto:contact@novajed.com?subject=Hello%20There">Contact</a>
      <p />
      <div>
        <IconContext.Provider value={{ className: "icon" }}>
          <a
            href="https://github.com/Novajed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/novajed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/novajed_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  </div>
)
