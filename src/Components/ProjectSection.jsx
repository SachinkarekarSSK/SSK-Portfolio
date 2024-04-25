import React, { createContext } from "react";
import LeftSidedCard from "./projectComponents/LeftSidedCard";
import RightSidedCard from "./projectComponents/RightSidedCard";

import imageOne from "../images/projectOne.webp";
import imageTwo from "../images/projectimgTwo.png";
import imageThree from "../images/projectimgThree.webp";
import imageFour from "../images/projectimgFour.webp";
import imageFive from "../images/screencaptureofBurgerwebsite.png";

const ProjectTitle = createContext();
const ProjectImage = createContext();
const ProjectInfo = createContext();
const ProjectDemo = createContext();
const Projectblur = createContext();

const ProjectSection = ({ ...props }, ref) => {
  const projectInfo = [
    {
      projectName: "D-Burgers 🍔",
      img: imageFive,
      text: "Create,Customize and order your dream burger with the user-friendly D-Burger website, offering endless options to satisfy your taste buds.",
      cardType: "Left",
      liveDemo: "https://ssk-d-burger.vercel.app/",
      blur:'blur-[0px]'
    },
    {
      projectName: "CAR RENTAL 🚗",
      img: imageOne,
      text: "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
      cardType: "Right",
      blur:'blur-[5px]'
    },
    {
      projectName: "COINDOM 💰",
      img: imageTwo,
      text: "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
      cardType: "Left",
      blur:'blur-[5px]'
    },

    {
      projectName: "GYMATE 🏋️",
      img: imageThree,
      text: "A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.",
      cardType: "Left",
      blur:'blur-[5px]'
    },
  ];

  return (
    <>
      <div ref={ref} className="bg-pink-50 pt-10 pb-12">
        <div
          className="container  w-11/12 md:w-9/12     m-auto  "
          id="PROJECTS"
        >
          <h1 className="text-blue-700 text-lg font-extrabold">PORTFOLIO</h1>

          <h3 className="mb-5 mt-4 text-2xl">
            Each project is a unique piece of development 🧩
          </h3>
        </div>

        <div className="container w-11/12 md:w-9/12     m-auto  flex flex-col ">
          {projectInfo.map((item, index) => {
            return (
              <div className="div" key={index}>
                <ProjectTitle.Provider value={item.projectName}>
                  <ProjectImage.Provider value={item.img}>
                    <ProjectInfo.Provider value={item.text}>
                      <ProjectDemo.Provider value={item.liveDemo}>
                      <Projectblur.Provider value={item.blur}>
                        {item.cardType == "Right" ? (
                          <RightSidedCard />
                        ) : (
                          <LeftSidedCard />
                        )}
                      </Projectblur.Provider>
                      </ProjectDemo.Provider>
                    </ProjectInfo.Provider>
                  </ProjectImage.Provider>
                </ProjectTitle.Provider>
              </div>
            );
          })}
          {/* <ProjectTitle.Provider value={"D-Burgers 🍔"}>
            <ProjectImage.Provider value={imageFive}>
            <ProjectInfo.Provider value={"Create,Customize and order your dream burger with the user-friendly D-Burger website, offering endless options to satisfy your taste buds."}>

            <LeftSidedCard />

            </ProjectInfo.Provider>
            </ProjectImage.Provider>
          </ProjectTitle.Provider> */}

          {/* <ProjectTitle.Provider value={"SSK ECOMMERCE 🛒"}>
            <ProjectImage.Provider value={imageFour}>
            <ProjectInfo.Provider value={"A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."}>

            <LeftSidedCard />

            </ProjectInfo.Provider>
            </ProjectImage.Provider>
          </ProjectTitle.Provider> */}
        </div>
      </div>
    </>
  );
};

export default React.forwardRef(ProjectSection);
export { ProjectTitle, ProjectImage, ProjectInfo, ProjectDemo, Projectblur };
