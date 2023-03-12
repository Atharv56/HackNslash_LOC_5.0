import './App.css';
// import NavBar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/sign up/signup';
import Blog from './components/blog/blog';
import ContactUs from './components/contact-us/contact-us';
import Hero from './components/Hero/Hero';
import Multistep from './components/Form/Form';
import * as React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import Translate from './components/Translate/Translate';
import Predict from './components/predict/predict';
import Chat from './components/chat/Chat';
// import Articles from './components/blog/Articles';
//import MDBFooter from './components/Footer/footer';
import Courses from './components/Courses/courses';
import Event from './components/Events/event';
import StockImages from './components/explore/stock_images';
import EditButton from './components/profile/profile';



function App() {
  return (
    <>
    <ChakraProvider>

    <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Hero/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/blog' element={<Blog />} />
          <Route path='/contactus' element={<ContactUs />} />
          {/* <Route path='/form' element = {<Multistep/>} /> */}
          <Route path='/voice' element={<Translate />} />
          <Route path='/predict' element={<Predict />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/jobs' element={<Event />} />
          <Route path='/explore' element={<StockImages/>} />
          <Route path='/profile' element = {<EditButton/>} />
        </Routes>
      </Router>
            
    </ChakraProvider>
    </>
  );
}

export default App;
