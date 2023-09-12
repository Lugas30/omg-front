import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Layout } from "../layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../assets/global.css'

export const About = ({ baseUrl }) => {
  const [about, setAbout] = useState([]);
  const [aboutDesc, setAboutDesc] = useState([]);
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  });

  useEffect(() => {
    axios.get(`${baseUrl}/about`).then((res) => {
      setAbout(res.data);
    });
    axios.get(`${baseUrl}/about-desc`).then((res) => {
      setAboutDesc(res.data);
    });
  }, [baseUrl]);

  const logos = [
    "/assets/logo-client/logo1.png",
    "/assets/logo-client/logo2.png",
    "/assets/logo-client/logo3.png",
    "/assets/logo-client/logo4.png",
    "/assets/logo-client/logo5.png",
    "/assets/logo-client/logo6.png",
    "/assets/logo-client/logo7.png",
    "/assets/logo-client/logo8.png",
    "/assets/logo-client/logo9.png",
    "/assets/logo-client/logo10.png",
    "/assets/logo-client/logo11.png",
    "/assets/logo-client/logo12.png",
    "/assets/logo-client/logo13.png",
    "/assets/logo-client/logo14.png",
    "/assets/logo-client/logo15.png",
    "/assets/logo-client/logo16.png",
    "/assets/logo-client/logo17.png",
    "/assets/logo-client/logo18.png",
    "/assets/logo-client/logo19.png",
    "/assets/logo-client/logo20.png",
    "/assets/logo-client/logo21.png",
    "/assets/logo-client/logo22.png",
    "/assets/logo-client/logo23.png",
    // Add more logos here
  ];

  return (
    <Layout>
      <div className="mx-10 sm:mx-20 md:mx-30 xl:mx-40">
        <h1 className="text-4xl font-bold text-center mb-8">Our Service</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {about.map((item) => (
            <div key={item.id}>
              <h3 className="font-bold text-base mb-3">{item.service}</h3>
              <p className="text-sm text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="my-10">
          <hr />
          <h2 className="text-2xl font-bold text-center my-8">Our Client</h2>
          <Slider {...settings} className="my-10">
            {logos.map((logo, index) => (
              <div key={index} className="container">
                <img className="client-logo" src={logo} alt="logo" />
              </div>
            ))}
          </Slider>
          <hr />
        </div>
        <div>
        <h2 className="text-2xl font-bold text-center my-8">Why choose us?</h2>
          <p className="text-sm text-center">
            {aboutDesc.map((item) => item.description)}
            {/* In a period where we are progressively overwhelmed with data and
            it’s trying to get a message over, Ottimo Multima Group is the
            ultimate answer for client need of one-stop solution for all
            building eventful experience. The company offers end-to-end services
            leads by team full of experienced, supported byenergetic event
            planners, suppliers, venues and more.Based in Jakarta, we make,
            structure and convey unprecedented events of every kind all through
            the Indonesia and around the worldOne thing we can truly say about
            our team is that we are very passionate about our job! */}
          </p>
        </div>
      </div>
    </Layout>
  );
};
