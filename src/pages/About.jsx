import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Layout } from "../layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../assets/global.css";

export const About = ({ baseUrl, baseImg }) => {
  const [service, setService] = useState([]);
  const [about, setAbout] = useState([]);
  const [client, setClient] = useState([]);
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
    axios.get(`${baseUrl}/services`).then((res) => {
      setService(res.data.data);
    });

    axios.get(`${baseUrl}/abouts`).then((res) => {
      setAbout(res.data.data);
    });

    axios.get(`${baseUrl}/clients`).then((res) => {
      setClient(res.data.data);
    });
  }, [baseUrl]);

  return (
    <Layout>
      <div className="mx-10 sm:mx-20 md:mx-30 xl:mx-40">
        <h1 className="text-4xl font-bold text-center mb-8">Our Service</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {service.map((item) => (
            <div key={item.id}>
              <h3 className="font-bold text-base mb-3">{item.title}</h3>
              <p
                className="text-sm text-slate-500"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          ))}
        </div>
        <div className="my-10">
          <hr />
          <h2 className="text-2xl font-bold text-center my-8">Our Client</h2>
          <Slider {...settings} className="my-10">
            {client.map((logo, index) => (
              <div key={index} className="container">
                <img
                  className="client-logo"
                  src={`${baseImg}/${logo.profile}`}
                  alt={logo.name}
                />
              </div>
            ))}
          </Slider>
          <hr />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center my-8">
            Why choose us?
          </h2>
          <p
            className="text-sm text-center"
            dangerouslySetInnerHTML={{ __html: about.description }}
          ></p>
        </div>
      </div>
    </Layout>
  );
};
