import React from "react";

const LocationComp = ({
  link,
  logo,
  logoColor,
  emailorLocation,
  detailaboutEorL,
}) => {
  return (
    <>


      <div className="location flex group  place-items-center gap-3 sm:text-xl ">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="smallbox relative  mb-3  sm:m-auto bg-white shadow-md flex align-middle items-center justify-center rounded-full h-20 w-20">
          <span className=" group-hover:animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-25 -z-10"></span>
            <i className={`fa-solid ${logo} ${logoColor} text-3xl`}></i>
          </div>
        </a>
        <h1 className="hidden sm:block">{emailorLocation} </h1>
        <p className="hidden sm:block">{detailaboutEorL}</p>
      </div>
    </>
  );
};

export default LocationComp;
