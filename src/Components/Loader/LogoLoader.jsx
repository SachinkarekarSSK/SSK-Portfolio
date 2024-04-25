import React from 'react'
import SSKLogo from '/src/images/s-image.png'


const LogoLoader = ()=>{
    return(
        <>
        <div className="container h-screen w-full flex justify-center items-center">

      <div className="imgbox group  relative m-3 sm:m-0 bg-white shadow-md flex align-middle items-center justify-center rounded-full h-28 w-28 ">
        <span className={`animate-ping absolute inline-flex h-full w-full sm:h-72 sm:w-72 rounded-full
         bg-cyan-600 opacity-25 -z-10 `}></span>
        <img src={SSKLogo} loading="lazy" className="htmlicon  h-20 transition-all" alt="" />
      </div>
         </div>
        </>
    )
}
export default LogoLoader