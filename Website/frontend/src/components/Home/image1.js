import { Parallax } from 'react-parallax';
import './image.css'
import woman1 from '../images/b1.jpg';
import { Link } from 'react-router-dom';
const Image1 = () => (
    <Parallax className='image' bgImage= {woman1} strength={800}>
        <div className= "content">
            {/* <span className='img-text'>Welcome to Sakhi</span> */}
            <Link to="/explore"><button className='img-btn' style={{fontSize:35}} >
                explore</button></Link>
        </div>
    </Parallax>
);

export default Image1;