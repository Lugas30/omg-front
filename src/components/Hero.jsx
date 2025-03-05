import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`https://cms.omgroup.id/api/headers`).then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="max-w-md">
          <h1
            className="text-5xl text-gray-950 leading-snug my-3"
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h1>
          <button className="py-2 uppercase colorBtn font-semibold">
            <Link to="/work">See our work</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
