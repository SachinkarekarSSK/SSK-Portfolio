import React from "react";

import ContactStyle from '../Components/ContactStyle'
import LocationComp from "./ContactComp/LocationComp";

const Contact = ({...props},ref) => {
    return (
        <>

            <div ref={ref} className="main-box  relative flex pt-5 pb-5  ">

                <ContactStyle />
 
                <div className="container m-auto z-50 w-9/12 flex flex-col items-center text-center sm:text-left" id="CONTACT">
                    <h1 className="w-full sm:text-lg font-bold text-blue-700">CONTACT</h1>
                    <p className="w-full text-2xl  sm:text-3xl pt-5 mb-5">
                        Don't be shy! Hit me up!
                    </p>
                    <div className="box flex w-full  gap-16 mt-4  mb-4 justify-center sm:gap-4  sm:justify-between flex-wrap sm:flex-row ">

                        <LocationComp link={'https://maps.app.goo.gl/u7rtgU56Ltqd4DiS9'} logo={'fa-map-location-dot'} logoColor={'text-blue-700'} 
                        pulseColor={'text-blue-400'} emailorLocation={'Location'} detailaboutEorL={'Goa , India 📍'}/>


                        <LocationComp link={'mailto:sachin.07karekar@gmail.com?Subject=Hi'} logo={'fa-envelope-open-text'} logoColor={'text-red-600'} 
                        pulseColor={'text-red-400'} emailorLocation={'Email'} detailaboutEorL={'sachin.07karekar@gmail.com'}/>



  
                    </div> 
                </div>
            </div>
        </>
    )
}

export default React.forwardRef(Contact)