import React from "react";
import ProjectLeftPart from './ProjectLeftPart'
import ProjectRightPart from './ProjectRightPart'



const LeftSidedCard = () => {
    return (
        <>
            <div className=" container h-screen gap-0 lg:gap-2 pt-2 pb-4 sm:pt-0 sm:pb-0 sm:h-[75vh] mt-14 mb-14  w-full flex flex-col  shadow-xl rounded-xl bg-white justify-center items-center sm:flex sm:flex-row ">


                {/* this is for the image section */}
                <ProjectLeftPart  />

                {/* this is for the information section */}
                <ProjectRightPart />


            </div>
        </>
    )
}

export default LeftSidedCard