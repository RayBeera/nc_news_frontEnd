import React from "react";
import { useContext } from "react";
import UserContext from "../Contexts/User";

const Navbar = () => {

  const loggedInUser = useContext(UserContext)
  return (
    <nav className="nav">
      <a className="title" href="/">NC News</a>
      <p>Welcome{loggedInUser} </p>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/articles">Articles</a></li>
        <li><a href="/topics">Topics</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
