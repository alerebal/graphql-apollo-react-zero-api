import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className='nav-bar'>
      <div className="home">
          <Link to={'/'}>Home</Link>
      </div>
      <ul className="links">
        <li><Link to={"/users"}>Users</Link></li>
        <li><Link to={"/posts"}>Posts</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;
