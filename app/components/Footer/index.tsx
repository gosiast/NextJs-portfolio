import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent  border-b-transparent text-white">
      <div className="container md:py-6 py-4 flex justify-center">
        <p className="text-slate-600 text-sm">
          This portfolio is an{" "}
          <a
            href="https://github.com/gosiast/NextJs-portfolio"
            target="_blank"
            className="text-pink-400 hover:duration-300 hover:underline"
          >
            open source
          </a>{" "}
          and was coded by{" "}
          <a
            href="https://github.com/gosiast"
            target="_blank"
            className="hover:text-pink-400
    hover:duration-300 hover:underline"
          >
            Małgorzata Stano
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
