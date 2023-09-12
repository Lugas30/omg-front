import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../layout/Layout";
import axios from "axios";
import { useState, useEffect } from "react";

export const DetailWork = ({ baseUrl }) => {
  const { id } = useParams();
  const [porto, setPorto] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/work/${id}`).then((res) => {
      setPorto(res.data);
    });
  }, [baseUrl]);

  return (
    <Layout>
      <div className="mx-10 sm:mx-20 md:mx-30 xl:mx-40">
        <div className="grid mb-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="">
            <h1 className="text-5xl font-bold mb-10">{porto.title}</h1>
            <p className="text-gray-500 mb-10 text-sm">{porto.description}</p>

            {/* Tags */}
            {/* <ul className="font-bold mb-10">
            {data.tags.map((tag, index) => (
              <li key={index}># {tag}</li>
            ))}
          </ul> */}
            <ul className="font-bold mb-10">
              <li>{porto.tags1}</li>
              <li>{porto.tags2}</li>
              <li>{porto.tags3}</li>
              <li>{porto.tags4}</li>
            </ul>
          </div>

          <div className="portfolio-image mb-10">
            <img
              className="w-screen"
              src={`../../assets/image/${porto.img_thumb}`}
              width="700"
              height="900"
              alt="ini gambar Portfolio"
            />
          </div>
        </div>
        {/* Menambahkan loop untuk gambar img1 hingga img8 */}
          <div className="w-full grid grid-cols-2 gap-4">
            {" "}
            {/* Mengatur jumlah kolom dalam grid */}
            {Array.from({ length: 8 }, (_, index) => (
              <img
                className="w-full h-auto"
                key={`img${index + 1}`}
                src={`../../assets/image/${porto[`img${index + 1}`]}`}
                alt=""
              />
            ))}
          </div>
      </div>
    </Layout>
  );
};
