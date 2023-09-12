import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export const Layout = ({ children }) => {
  return (
    <React.Fragment>
    <main className="main flex flex-col justify-between min-h-screen bg-slate-50">
      <Header />
      {children}
      <Footer />
    </main>
    </React.Fragment>
  );
};
