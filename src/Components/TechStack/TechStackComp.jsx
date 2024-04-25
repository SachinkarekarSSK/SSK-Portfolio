import React from "react";

const TechStackComp = ({svglogo, pulseColor,tooltipText}) => {
  return (
    <>
       <div className="tooltip" data-tip={tooltipText}>
      <div className="imgbox group  relative m-3 sm:m-0 bg-white shadow-md flex align-middle items-center justify-center rounded-full h-14 w-14 ">
        <span className={`group-hover:animate-ping absolute inline-flex h-full w-full rounded-full
         ${pulseColor} opacity-25 -z-10 `}></span>
        <img src={svglogo} loading="lazy" className="htmlicon group-hover:scale-125 h-8 transition-all" alt="" />
      </div>

      </div>
    </>
  );
};
export default TechStackComp