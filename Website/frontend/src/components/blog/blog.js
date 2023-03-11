import React from "react";
import AddArticle from "./addArticle";
import BlogContainer from "./blogCont";
import NavScrollExample from '../navbar/Navbar';
import AnimatedPage from "../Animate/Animate";


const Blog = () => {
    return (
        <>
        <NavScrollExample />
        <AnimatedPage>
                <div className="container" style={{"marginTop": 100}}>
                    <div className="row">
                        <h1 className="center">Share your experience</h1>
                        <div className="col-md-8">
                            <BlogContainer />
                        </div>
                        <div className="col-md-4">
                           <AddArticle />
                        </div>
                    </div>
        
                </div>
                </AnimatedPage>
            </>
            )
}

export default Blog;
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