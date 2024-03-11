import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <a className="title" href="/">NC News</a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/articles">Articles</a></li>
        <li><a href="/topics">Topics</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
