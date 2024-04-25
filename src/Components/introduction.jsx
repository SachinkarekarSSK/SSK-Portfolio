// import image from '../images/profilePic.jpeg'

import React from "react"


const Introduction = ({...props},ref) => {

    const largeScreenClass = 'text-3xl mr-2   relative scale-75 hover:scale-19 top-0 hover:-top-3  transition-all duration-500 ease-in-out'

    const smallScreenClass = 'text-3xl mr-2  relative scale-75 hover:scale-19 top-0 '

    const socialLinks = [
        {
            name:'linkedIn',
            link:'https://www.linkedin.com/in/sachin-karekar-a4b0761a5',
            iconClass:'fab fa-linkedin text-slate-300 hover:text-blue-600',
            tooltipText:'linkedIn'
            
        },
        {
            name:'Twitter',
            link:'https://twitter.com/MrSachinKarekar?t=17pp046SVcw95vUopf0QUg&s=08',
            iconClass:'fab fa-twitter text-slate-300  hover:text-cyan-500',
            tooltipText:'Twitter'
        },
        {
            name:'Instagram',
            link:'https://instagram.com/mr_.sachin_?igshid=OTk0YzhjMDVlZA==',
            iconClass:'fab fa-instagram text-slate-300  hover:text-red-600',
            tooltipText:'Instagram'
        },
        {
            name:'Github',
            link:'https://github.com/SachinkarekarSSK',
            iconClass:'fab fa-github text-slate-300  hover:text-gray-950',
            tooltipText:'Github'
        },
        {
            name:'Resume',
            link:'https://www.canva.com/design/DAF-Dpcbj-c/J0tJLxDPqmErXBUEyxrN1w/view?utm_content=DAF-Dpcbj-c&utm_campaign=designshare&utm_medium=link&utm_source=editor',
            iconClass:'fa-regular fa-file  text-red-600 hover:text-red-600',
            tooltipText:'Resume'
        },
    ]
    
    return (
        <>

            <div ref={ref} className="outerbox  " data-theme={`${props.theme? 'night': 'light'}`}>

                <div className="box  lg:w-5/6  flex flex-col m-auto h-5/6" id="HOME">


                    <div className="container p-2 flex flex-col-reverse align-middle justify-center mt-20 h-5/6 m-auto text-3xl sm:text-3xl md:text-4xl  sm:flex sm:flex-row sm:h-screen sm:m-auto sm:justify-center sm:items-center lg:w-full" >


                        <div className="left  text-center leading-tight   sm:m-auto md:w-1/2 sm:text-left ">
                            <h1 className="font-bold lg:text-5xl"><span className='Mernlogo text-pink-600'>MERN</span> Stack Developer</h1>
                            <p className='text-lg sm:text-2xl text-slate-600 mt-4'>Hi, I am Sachin S. Karekar. A Passionate MERN Stack Developer based in Goa , India 📍</p>


                            {socialLinks.map((item, index)=>{
                                return(
                                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" data-tip={item.tooltipText}>

                                    <i className={`${item.iconClass} text-3xl mr-2  relative scale-75 hover:scale-19 top-0 lg:text-3xl  lg:hover:-top-3  lg:transition-all lg:duration-500 lg:ease-in-out`}></i>
        
                                    </a>
                                )
                            })}

                        </div>

                        <div className="right mb-4  md:w-2/5">
                            <div className="image h-72 w-72 lg:h-80 lg:w-80  flex justify-center align-middle bg-purple-600 m-auto ">
                            </div>
                        </div>



                    </div>


        
                </div>

            </div>
        </>
    )
}


export default React.forwardRef(Introduction)
