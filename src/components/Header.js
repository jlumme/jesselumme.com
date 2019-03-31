import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <header style={{ marginBottom: `1.5rem` }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Jesse Lumme</title>
      <link rel="canonical" href="https://jesselumme.com" />
    </Helmet>
    <ul>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/blog/">Blog</ListLink>
    </ul>
  </header>
)
