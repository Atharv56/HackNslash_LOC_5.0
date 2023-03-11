import { Parallax } from 'react-parallax';
import './image.css'
import woman3 from '../images/b3.jpg'
import { Link } from 'react-router-dom';
const Image3 = () => (
    <Parallax className='image' bgImage= {woman3} strength={800}>
        <div className= "content">
            {/* <Link to='/blog'> */}
            {/* <button className='img-btn'>Enter your blog</button> */}
            {/* </Link> */}
            <Link to="/jobs"><button className='img-btn' style={{fontSize:35}} >
                jobs</button></Link>
        </div>
    </Parallax>
);

export default Image3;