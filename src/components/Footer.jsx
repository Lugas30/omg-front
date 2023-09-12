import React from "react";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="sticky bottom-0 right-0 text-xs p-4 bg-transparent text-base-content">
      <div>
        <p>PT. Ottimo Multima Group @{currentYear}</p>
      </div>
    </footer>
  );
};
