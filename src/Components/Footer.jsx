import React from "react";

const Footer = () => {
  return (
    <>
    <div className="outerbox bg-neutral-900">

        <div className="myfooter container flex flex-col text-center  pb-5 gap-3 w-9/12 m-auto pt-5 ">
          <h1 className="font-bold text-sm text-white">&copy; 2024 SSK. All rights are reserved</h1>

          <div className="box flex m-auto">
            <a
              href="https://www.linkedin.com/in/sachin-karekar-a4b0761a5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-2xl mr-2  text-slate-300 relative scale-75 hover:scale-19 top-0 hover:-top-3 hover:text-blue-600 transition-all duration-500 ease-in-out"></i>
            </a>

            <a
              href="https://twitter.com/MrSachinKarekar?t=17pp046SVcw95vUopf0QUg&s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter text-2xl mr-2  text-slate-300 relative scale-75 hover:scale-19  top-0 hover:-top-3 hover:text-cyan-500 transition-all duration-500 ease-in-out"></i>
            </a>

            <a
              href="https://instagram.com/mr_.sachin_?igshid=OTk0YzhjMDVlZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-2xl mr-2  text-slate-300 relative scale-75 hover:scale-19  top-0 hover:-top-3 hover:text-red-600 transition-all duration-500 ease-in-out"></i>
            </a>

            <a
              href="https://github.com/SachinkarekarSSK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-2xl  text-slate-300 relative scale-75 hover:scale-19 top-0 hover:-top-3 hover:text-emerald-300 transition-all duration-500 ease-in-out"></i>
            </a>
          </div>
        </div>
              </div>
    </>
  );
};

export default Footer;
