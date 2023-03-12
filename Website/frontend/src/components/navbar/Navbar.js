import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link}  from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./TripTales_Dark.png"
import './Navbar.css'

export default function NavScrollExample() {
  return (
    <div className='navBar'>
    <Navbar bg="black" variant="dark" expand="lg" fixed = 'top' collapseOnSelect>
        <Navbar.Brand href="/home">
          {/* <img  src={logo} alt="" class="logo"/> */}
          <h1 className=''>PicBucks</h1>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='right-aligned'>
        <span styles={{display:"inline",float:"right",marginTop:5,textAlign:"center",padding:50}}>
          <Nav>
          <NavDropdown title="Services" id="nav-dropdown1">
              <NavDropdown.Item href="/explore" className = "links">Explore</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="/jobs" className = "links">Jobs</NavDropdown.Item>

            </NavDropdown>

            {/* <NavDropdown title="Explore" id="nav-dropdown2">
              <NavDropdown.Item href="/courses" className = "links">Courses</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="/event" className = "links">Events</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/courses" className = "links">Courses</Nav.Link>
            <Nav.Link href="/blog" className = "links">Blog</Nav.Link>
            <Nav.Link href="/contactus" className = "links">Contact Us</Nav.Link>
            
            <span id="bttn">
              <Link to= "/login"><Button className="btn">Log Out</Button></Link>
            </span>
            
            

          </Nav>
          </span>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}