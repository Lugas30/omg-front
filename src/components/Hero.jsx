import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl text-gray-950 leading-snug my-3">
            ... <br></br>event organizer{" "}
            <span className="font-bold">creative</span> business consulting.
          </h1>
          <button className="py-2 uppercase colorBtn font-semibold">
            <Link to="/work">See our work</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
