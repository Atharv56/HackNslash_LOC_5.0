import React from 'react'
import Image1 from "./image1";
import Image2 from "./image2";
import Image3 from './image3';
import TextBox from './text1';
import TextBox2 from './text2';
import NavScrollExample from '../navbar/Navbar';
import AnimatedPage from '../Animate/Animate';
// import Image3 from "./image3";
// import TextBox from './about';
// import TextBox1 from './about1';
export default function Home() {
  return (
    
    <div>
      
      <NavScrollExample />
      <AnimatedPage>
      <Image1 />
      <TextBox/>
      <Image2 />
      <TextBox2 />
      <Image3 />
      </AnimatedPage>
      
    </div>
    
  )
}