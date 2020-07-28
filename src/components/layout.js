import React from "react"
import { Link } from "gatsby"
import c from '../assets/images/c.png'
const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <img src={c} alt='C' style={{width: 60}}/>
            <h3 style={{ display: `inline` }}>ierra</h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </header>
        {children}
    </div>
  )
}