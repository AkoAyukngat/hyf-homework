import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav_bar">
      <h3>Logo</h3>
      <ul className="user_links">
        <Link className='link_style' to="/">
          <li>Home</li>
        </Link>
        <Link className='link_style'  to="Github Organisation Search">
          <li>GitHub Organisation Search</li>
        </Link>
        <Link className='link_style'  to="About">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
