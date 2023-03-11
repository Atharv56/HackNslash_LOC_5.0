import React from "react";

import AnimatedPage from "../Animate/Animate";
import NavScrollExample from "../navbar/Navbar";
import AddEvent from "./addEvents";
import EventContainer from "./eventsCont";

const Event = () => {
    return (
        <>
        <NavScrollExample />
        <AnimatedPage>
                <div className="container" style={{"marginTop": 100}}>
                    <div className="row">
                        <div className="col-md-8">
                            <EventContainer/>
                        </div>
                        <div className="col-md-4">
                           <AddEvent/>
                        </div>
                    </div>
        
                </div>
                </AnimatedPage>
            </>
            )
}

export default Event;
// export default function Blog(){

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-8">
//                     <blogCont/>
//                 </div>
//                 <div className="col-md-4">
//                    <addArticle />
//                 </div>
//             </div>

//         </div>
//     )
// }