import React from "react";
import { Layout } from "../layout/Layout";
import axios from "axios";
import { useState, useEffect } from "react";

export const Contact = ({ baseUrl }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${baseUrl}/contacts`).then((res) => {
      setData(res.data.data);
    });
  }, [baseUrl]);

  return (
    <Layout>
      <div className="mx-10 sm:mx-20 md:mx-30 xl:mx-40">
        <div className="h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Start a conversation</h1>
            <p className="text-sm mb-8">
              We look forward to collaborating and thriving with you.
            </p>
            <a href={`https://api.whatsapp.com/send?phone=${data.phone}`}>
              <button className="btn btn-success">Consult with us</button>
            </a>
          </div>

          <div className="my-10">
            <hr></hr>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="font-bold text-base">Email us at</h3>
              <p className="font-bold mt-3 text-2xl">{data.email}</p>
            </div>
            <div className="text-left sm:text-right md:text-right xl:text-right">
              <a href={data.location}>
                <h3 className="font-bold text-base">Our office</h3>
                <p
                  className="mt-3 text-sm"
                  dangerouslySetInnerHTML={{ __html: data.address }}
                ></p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
