import React from 'react'
import Data from "./image_data";
import './maincontainer.css';
import Pin from './Pin';
import { Search2Icon, AddIcon } from '@chakra-ui/icons';
import Navbar from '../navbar/Navbar'
import AnimatedPage from '../Animate/Animate';
// import Footer from '../Footer';

export default function Main_container() {
  return (
    <>
    {/* <Navbar/> */}
    <AnimatedPage>
      <div className='main_container'>

        <div className="main">
        <main>
        {/* 
        <div className = "ghanta">
        <div className="searchBox">
          <input type="text" placeholder="Search" />
          <div className="search">
            <Search2Icon/>
          </div>
        </div>
        <div className="searchBox">
        <button type="button">Upload Images</button>
          <div className="search">
            <AddIcon/>
          </div>
        </div>
        </div> */}
        <div className="mainContainer">
          {Data &&
            Data.map((data) => (
              <Pin
                key={data.id}
                pinSize={data.size}
                imgSrc={data.imgSrc}
                name={data.name}
                link={data.link}
              />
            ))}
        </div>
      </main>
        </div>
    </div>

    </AnimatedPage>
    {/* <Footer/> */}
    </>
    
  );
}
