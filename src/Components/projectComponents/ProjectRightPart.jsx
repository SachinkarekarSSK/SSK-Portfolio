import React, { useContext } from "react";
import {ProjectTitle,ProjectInfo, ProjectDemo} from "../ProjectSection";

const ProjectRightPart = ()=>{
    const projectitle = useContext(ProjectTitle)
    const projectinfo = useContext(ProjectInfo)
    const projectDemo = useContext(ProjectDemo)
    return(
        <>
                <div className="right h-1/2 sm:w-2/6 sm:h-5/6 text-center  flex flex-col justify-evenly mr-4 ml-4">


                    <h1 className="text-xl font-bold">
                        {projectitle}
                    </h1>
                    <p className="text-slate-600">
                        {projectinfo}
                    </p>

                    <div className="thirdsection flex justify-center gap-8">
                    <button className=" shadow-md p-3">React</button>
                    <button className=" shadow-md p-3">TailWind</button>

                    </div>

                    <div className="fourthsection flex justify-around gap-12">

                    <a href="https://github.com/sachinkarekarSSK/D-Burgers.github.io" target="_blank">Code <i className="fab fa-github text-2xl"></i></a>
                    <a href={projectDemo} target="_blank">Live Demo <i className="fa-solid fa-arrow-up-right-from-square text-xl"></i></a>
                    </div>
                </div>
        </>
    )
}


export default ProjectRightPart