import React, { useRef, useState } from "react";
import "../App.css";
import {Link} from 'react-router-dom'

const Navbar = ({homeref, aboutref, contref, projectref}) => {
  const [showOrHide, setshowOrHide] = useState(false);
  // console.log(contactref);

  const handleclick = (ref)=>{
    ref.current?.scrollIntoView({behavior:'smooth'}) 
  }

  const NavItems = [
    {
      navLocation:'Home',
      link: '#HOME',
      ref:'homeref'
    },
    {
      navLocation:'About',
      link: '#ABOUT',
      ref:'aboutref'
    },
    {
      navLocation:'Project',
      link: '#PROJECT',
      ref:'projectref'
    },
    {
      navLocation:'Contact',
      link: '#CONTACT',
      ref:'contref'

    }

  ]


  return (
    <>
      <nav
        className="navbar  w-full px-7   sticky top-0 z-50 bg-base-100 backdrop-blur bg-opacity-80  shadow-sm transition-all duration-100"
        
      >
        <div className="flex-1">
          <a className=" normal-case text-xl ">SSK</a>
        </div>
        <div className="hidden sm:block sm:flex-none">
          <ul className="menu menu-horizontal px-1 ">
            {/* <li className="">
              <a href="#HOME">Home</a>
            </li>
            <li>
              <a href="#ABOUT">About</a>
            </li>
            <li>
              <a href="#PROJECTS">Projects</a>
            </li>
            <li>
              <a href="#CONTACT">Contact</a>
            </li> */}

              {/* <li >
                <Link onClick={()=>{handleclick(contref)}}  >{'Contact'}</Link>
              </li> */}
            {NavItems.map((item)=>{
              return(
                <li key={item.navLocation}>
                <Link onClick={(e)=>{
                  e.preventDefault()
                  if(item.ref == 'homeref') handleclick(homeref)
                  if(item.ref == 'aboutref') handleclick(aboutref)
                  if(item.ref == 'contref') handleclick(contref)
                  if(item.ref == 'projectref') handleclick(projectref)
                }} >{item.navLocation}</Link>
              </li>
              )
            })}
           
          </ul>
        </div>

        <ul className={`${!showOrHide ? "block" : "hidden"} sm:hidden`}>
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setshowOrHide(true);
              }}
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>
        <ul className={`${showOrHide ? "block" : "hidden"} sm:hidden`}>
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setshowOrHide(false);
              }}
            >
              <i className="fas fa-times"></i>
            </a>
          </li>
        </ul>
      </nav>

      <div
        className={`${
          showOrHide ? " left-0 fixed" : " -left-full fixed"
        } bg-opacity-80 backdrop-blur  sm:hidden smallnav flex z-50 conatainer transition-all duration-500 ease-in-out  h-2/5 w-full shadow-md bg-white [absolute, fixed] `}
      >
        <ul className="menu menu-vertical flex w-full m-auto content-center  text-center">
          <li
            className="m-auto"
            onClick={() => {
              setshowOrHide(false);
            }}
          >
            <a href="#HOME">Home</a>
          </li>

          <li
            className="m-auto"
            onClick={() => {
              setshowOrHide(false);
            }}
          >
            <a href="#ABOUT">About</a>
          </li>
          <li
            className="m-auto"
            onClick={() => {
              setshowOrHide(false);
            }}
          >
            <a href="#PROJECTS">Projects</a>
          </li>
          <li
            className="m-auto"
            onClick={() => {
              setshowOrHide(false);
            }}
          >
            <a href="#CONTACT">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
