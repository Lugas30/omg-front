import React from "react";
import maintain from "../assets/image/maintain.jpg";
import logo from "../assets/image/logo-omg.png";
import { Link } from "react-router-dom";

export const Maintain = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-md">
        <img src={logo} alt="OMG Logo" className="mx-auto w-24 h-auto mb-4" />
        <img
          src={maintain}
          alt="Under Maintenance"
          className="mx-auto w-64 h-auto mb-4"
        />
        <h1 className="text-2xl font-semibold text-gray-800">
          We'll Be Back Soon!
        </h1>
        <p className="text-gray-600 mt-2">
          Our website is currently undergoing scheduled maintenance. We should
          be back shortly. Thank you for your patience.
        </p>
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Need help? Contact us at{" "}
            <Link to="/contact" className="underline">
              Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
