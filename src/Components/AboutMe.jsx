import React from "react";
import '../App.css'

import {computerImage,codeImg,htmlsvg,csssvg,javascriptsvg,reactsvg,bootstrapsvg,tailwindsvg,nodejssvg,mongodbsvg, pythonsvg,sqlsvg} from "../allExports.js"

import TechStackComp from "./TechStack/TechStackComp";
import {LazyLoadImage} from 'react-lazy-load-image-component'



const AboutMe = ({...props},ref) => {
    return (
        <>

            <div ref={ref} className=" sm:h-screen pt-6 mb-24" >

                <div className="container  lg:w-5/6 w-11/14 m-auto">
                    <div className="techStack container p-2 justify-center  m-auto mt-8 flex flex-col items-center md:w-11/14 lg:w-full  sm:m-auto sm:flex sm:flex-row sm:items-center">
                        <div className="text w-full text-center sm:w-1/5 align-middle" >
                            <p className="font-bold "><span className="border-b-2 border-black pb-1 sm:border-r-2 sm:pr-3 sm:border-b-0">Tech Stack</span> </p>

                        </div>
                        <div className="flex justify-evenly w-4/5  mt-4 flex-wrap sm:mt-0 ">

                            <TechStackComp tooltipText={'Html'} svglogo={htmlsvg} pulseColor={'bg-pink-400'}/>
                            <TechStackComp tooltipText={'Css'} svglogo={csssvg} pulseColor={'bg-blue-400'}/>
                            <TechStackComp tooltipText={'JavaScript'} svglogo={javascriptsvg} pulseColor={'bg-yellow-400'}/>
                            <TechStackComp tooltipText={'React.js'} svglogo={reactsvg} pulseColor={'bg-blue-400'}/>
                            <TechStackComp tooltipText={'Redux Tool Kit'} svglogo={'https://redux-toolkit.js.org/img/redux.svg'} pulseColor={'bg-purple-400'}/>
                            <TechStackComp tooltipText={'Bootstrap'} svglogo={bootstrapsvg} pulseColor={'bg-purple-400'}/>
                            <TechStackComp tooltipText={'Tailwind Css'} svglogo={tailwindsvg} pulseColor={'bg-cyan-500'}/>
                            <TechStackComp tooltipText={'Node Js'} svglogo={nodejssvg} pulseColor={'bg-green-400'}/>
                            <TechStackComp tooltipText={'MongoDB'} svglogo={mongodbsvg} pulseColor={'bg-green-500'}/>
                            <TechStackComp tooltipText={'Python'} svglogo={pythonsvg} pulseColor={'bg-yellow-400'}/>
                            <TechStackComp tooltipText={'SQL'} svglogo={sqlsvg} pulseColor={'bg-blue-400'}/>




                      
                        </div>
                    </div>

                </div>

                <div className="container Aboutme flex justify-center flex-wrap gap-16 mt-14 m-auto lg:justify-between lg:w-9/12 w-11/14  " id="ABOUT">

                    <div className="card h-72 w-72  sm:h-96  sm:w-2/5 rounded-md">
                        <LazyLoadImage src={computerImage} loading="lazy" className="aboutImage h-full w-full rounded-3xl bg-slate-200" alt="" />
                        <div className="rotatingImg absolute  sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-36  -bottom-9 -right-12">
                            <LazyLoadImage src={codeImg} loading="lazy" alt="" className="hidden spin  sm:block sm:spin " />
                        </div>
                    </div>

                    <div className="right w-11/12 sm:w-1/2  bg-white">

                        <div className="para  w-full text-center  sm:w-11/12 sm:text-left">
                            <h1 className="text-blue-700 font-extrabold">ABOUT ME</h1>
                            <h2 className="mb-5 mt-4 text-2xl ">A Dedicated MERN Stack Developer Based in Goa India 📍</h2>
                            <p className="text-slate-500 font-normal font-sans text-sm md:text-base">
                                As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React , Bootstrap and Tailwind css. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default React.forwardRef(AboutMe)