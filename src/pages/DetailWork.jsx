import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../layout/Layout";
import axios from "axios";
import { useState, useEffect } from "react";

export const DetailWork = ({ baseUrl, baseImg }) => {
  const { slug } = useParams();
  const [porto, setPorto] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/works`).then((res) => {
      setPorto(res.data.data);
    });
  }, [baseUrl]);

  // filter data berdasarkan slug
  const data = porto.filter((item) => item.slug == slug)[0];

  return (
    <Layout>
      <div className="mx-10 sm:mx-20 md:mx-30 xl:mx-40">
        <div className="grid mb-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
          <div className="">
            <h1 className="text-5xl font-bold mb-10">{data?.title}</h1>
            <p
              className="text-gray-500 mb-10 text-sm"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></p>

            {/* Tags */}
            {/* <ul className="font-bold mb-10">
            {data.tags.map((tag, index) => (
              <li key={index}># {tag}</li>
            ))}
          </ul> */}
            <ul className="font-bold mb-10">
              <li>{data?.tags1}</li>
              <li>{data?.tags2}</li>
              <li>{data?.tags3}</li>
              <li>{data?.tags4}</li>
            </ul>
          </div>

          <div className="portfolio-image mb-10">
            <img
              className="w-screen"
              src={`${baseImg}/${data?.thumbnail}`}
              width="700"
              height="900"
              alt="ini gambar Portfolio"
            />
          </div>
        </div>
        {/* Menambahkan loop untuk gambar img1 hingga img8 */}
        <div className="w-full grid grid-cols-2 gap-4">
          {/* tampil gambar */}
          {data?.images.map((image, index) => (
            <img
              className="w-full h-auto"
              key={index}
              src={`${baseImg}/${image.image}`}
              alt=""
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
