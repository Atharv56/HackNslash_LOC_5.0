import { Parallax } from 'react-parallax';
import './image.css'
import woman2 from '../images/b2.jpg'
import { Link } from 'react-router-dom';
const Image2 = () => (
    <Parallax className='image' bgImage= {woman2} strength={800}>
        <div className= "content">
        <Link to="/Courses"><button className='img-btn' style={{fontSize:35}} >
                Courses</button></Link>
            {/* <Link to='/Courses'></Link>
            {/* <div>
            Want more?
            Our catalog of premium courses, travel guides and documentaries is always growing.
            </div> */}
            {/* <button className='img-btn'  style={{fontSize:35}}>Explore Everything</button> */}
            {/* </Link> */} 
        </div>
    </Parallax>
);

export default Image2;