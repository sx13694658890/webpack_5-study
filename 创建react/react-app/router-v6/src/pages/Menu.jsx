import React from "react";

import { NavLink as Link
} from "react-router-dom";
export default function Menu() {
  const navLinkStyle = ({ isActive }) => {
    return isActive ? { backgroundColor: "yellow" } : null;
  };
  return (
    <div>
      <ul>
        <li>
          <Link style={navLinkStyle} to="/shop">shop</Link>
        </li>
        <li>
          <Link style={navLinkStyle} to="/about">about</Link>
        </li>
        <li>
          <Link  style={navLinkStyle} to="/">home</Link>
        </li>
        <li>
          <Link  style={navLinkStyle} to="/student/1">studnet</Link>
        </li>
      </ul>
    </div>
  );
}
