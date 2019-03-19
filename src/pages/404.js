import React from "react"
import { Link } from "gatsby"

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 700 }}>
    <h1>404</h1>
    <p>Hm. It seems this page does not exist. I do apologize.</p>
    <Link to="/">Go back home</Link>
  </div>
)
