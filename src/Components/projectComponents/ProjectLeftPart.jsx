import React, { useContext } from "react";
import { ProjectImage } from "../ProjectSection";
import { Projectblur } from "../ProjectSection";
import {LazyLoadImage} from 'react-lazy-load-image-component'

const ProjectLefPart = () => {
    const projectImage = useContext(ProjectImage)
    const blur = useContext(Projectblur)
    // console.log(projectImage);

    return (
        <>
            <div className={`left h-1/2 sm:w-7/12  sm:h-5/6  shadow-lg m-4 rounded-lg overflow-hidden bg-gray-200`}>
                <a target="__blank" className="bg-gray-700 " href="https://ssk-d-burger.vercel.app/">
                    <LazyLoadImage src={projectImage} loading="lazy" alt="" className={`movingPhoto ${blur}`} />
                </a>
            </div>

        </>
    )
}

export default ProjectLefPart