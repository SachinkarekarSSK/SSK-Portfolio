import React from "react";
import contactImage1 from '../images/contactimage1.png'
import contactImage2 from '../images/contactimage2.png'
import contactImage3 from '../images/contactimage3.png'
import contactImage4 from '../images/contactimage4.png'
import contactImage5 from '../images/contactimage5.png'
import contactImage6 from '../images/contactimage6.png'

const ContactStyle = () => {

  const contactBGimage = [
    {
      image:{contactImage1},
      class:'myabsolutebox absolute h-10 top-10 left-28  opacity-10 '
    },
    {
      image:{contactImage2},
      class:'myabsolutebox absolute h-10 top-28 right-12 opacity-10'
    },
    {
      image:{contactImage3},
      class:'myabsolutebox hidden sm:block absolute h-10 bottom-5 left-28 opacity-10'
    },
    {
      image:{contactImage4},
      class:'myabsolutebox absolute h-10 bottom-5 right-32 opacity-10 '
    },
    {
      image:{contactImage5},
      class:'myabsolutebox hidden sm:block absolute h-10 top-5 right-36 opacity-10'
    },
    {
      image:{contactImage6},
      class:'myabsolutebox absolute h-12 left-10 bottom-24 opacity-10'
    },
    {
      image:{contactImage2},
      class:'myabsolutebox hidden sm:block absolute h-10 bottom-0 right-72  opacity-10'
    },
    {
      image:{contactImage2},
      class:'myabsolutebox absolute h-10 bottom-0 left-7  opacity-10 '
    },
    {
      image:{contactImage3},
      class:'myabsolutebox hidden sm:block absolute h-8 bottom-24 right-36 opacity-10'
    },
    {
      image:{contactImage4},
      class:'myabsolutebox absolute h-8 bottom-28 left-36 opacity-10 '
    },
    {
      image:{contactImage4},
      class:'myabsolutebox absolute h-8 bottom-2 right-4 opacity-10 '
    },
    {
      image:{contactImage4},
      class:'myabsolutebox absolute h-8 top-2 right-4 opacity-10 '
    },
    {
      image:{contactImage2},
      class:'myabsolutebox  absolute h-10 top-0 left-12 opacity-10'
    },
    {
      image:{contactImage6},
      class:'myabsolutebox absolute h-8 right-52 bottom-0 opacity-10'
    },
    {
      image:{contactImage5},
      class:'myabsolutebox  absolute h-8 left-52 bottom-0 opacity-10 '
    },
  ]

  return (
    <>
      {contactBGimage.map((item,index)=>{
        return(
          <div key={index} className={item.class}>
          <img src={item.image} loading="lazy" className="h-full fixed" alt="" />
        </div>
        )
      })}

    </>
  );
};

export default ContactStyle