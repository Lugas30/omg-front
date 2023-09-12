import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo-omg.png";
import intagram from "../assets/icon/instagram.svg"

export const Header = () => {
  return (
    <nav className="navbar bg-transparent px-5">
      <div className="flex-1">
        <Link className="normal-case text-xl" to="/">
          <img src={logo} alt="Logo OMG"></img>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 uppercase text-sm font-bold">
          <li className="m-auto px-1">
            <Link to="/about">About</Link>
          </li>
          <li className="m-auto px-1">
            <Link to="/work">Work</Link>
          </li>
          <li className="m-auto px-1">
            <Link to="/contact">Contact</Link>
          </li>
          <a className="btn btn-circle normal-case text-xl" href="https://instagram.com/omgidn?igshid=MzRlODBiNWFlZA==">
            <img src={intagram} alt="Insta OMG"></img>
          </a>
        </ul>
      </div>
    </nav>
  );
};
