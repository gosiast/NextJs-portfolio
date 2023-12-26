import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-10 flex justify-center">
        <p className="text-slate-600">
          This portfolio is an{" "}
          <a
            href="https://github.com/gosiast/NextJs-portfolio"
            target="_blank"
            className="hover:text-pink-400 
    hover:duration-300 hover:undeline"
          >
            open source
          </a>{" "}
          and was coded by{" "}
          <a
            href="https://github.com/gosiast"
            target="_blank"
            className="hover:text-pink-400 
    hover:duration-300 hover:undeline"
          >
            Małgorzata Stano
          </a>
          .{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
