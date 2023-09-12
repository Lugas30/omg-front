import React from "react";
import { Layout } from "../layout/Layout";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Work = ({ baseUrl }) => {
  const [work, setWork] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/work`).then((res) => {
      setWork(res.data);
    });
  }, [baseUrl]);


  // Sortir data berdasarkan ID secara menurun (Agar yang terbaru selalu diatas)
  const sortedData = work.sort((a, b) => b.id - a.id);

  // Ambil data pertama sebagai data yang ingin ditampilkan
  const item = sortedData[0];


  return (
    <Layout>
      <div className="mx-10 sm:mx-20 md:mx-30 xl:mx-40">
        <h1 className="text-4xl font-bold mb-10">Work with us</h1>
        {work.map((item, index) => (
          <div className="portfolio-item" key={item.id}>
            {index % 2 === 0 ? (
              <React.Fragment>
                <div className="grid mb-20 relative grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                  <div className="portfolio-image">
                    <Link to={`/work/${item.id}`}>
                      <img
                        className="w-screen"
                        src={`assets/image/${item.img_thumb}`}
                        alt="ini gambar Portfolio"
                      />
                    </Link>
                  </div>

                  <Link className="relative m-0" to={`/work/${item.id}`}>
                    <div className="relative sm:relative md:absolute xl:absolute w-full top-1/2 -translate-y-1/2">
                      <div className="card rounded-none max-w-100 bg-base-100 shadow-2xl -left-0 sm:-left-0 md:-left-10 xl:-left-10">
                        <div className="card-body">
                          <h3 className="card-title pb-5">{item.title}</h3>
                          <p className="text-sm text-slate-500 line-clamp-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="grid mb-20 relative grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                  <Link className="relative m-0" to={`/work/${item.id}`}>
                    <div className="relative sm:relative md:absolute xl:absolute w-full top-1/2 -translate-y-1/2">
                      <div className="card rounded-none max-w-100 bg-base-100 shadow-2xl -right-0 sm:-right-0 md:-right-10 xl:-right-10">
                        <div className="card-body">
                          <h3 className="card-title pb-5">{item.title}</h3>
                          <p className="text-sm text-slate-500 line-clamp-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="portfolio-image order-first sm:order-first md:order-last xl:order-last">
                    <Link to={`/work/${item.id}`}>
                      <img
                        className="w-screen"
                        src={`assets/image/${item.img_thumb}`}
                        alt="ini gambar Portfolio"
                      />
                    </Link>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};
