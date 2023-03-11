import React, { useState } from "react";
import {Card, Form, Button, Container, FormCheck} from 'react-bootstrap'
import PredictImg from '../images/map1.jpg'
import NavScrollExample from "../navbar/Navbar";

var sectionStyle = {
    backgroundImage: `url(${PredictImg})`
 }
 

export default function Predict() {
    const [values, setValues] = useState(
        {quote : '',}
    )
    const [predict, setPredict] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(values)
        console.log(JSON.stringify(values))
        try{
                console.log(values)
                let res = await fetch("http://127.0.0.1:5000/predict", {
                    method: "POST",
                    // mode: "no-cors",
                    headers: {
                        Accept: "application/json, text/plain, /",
                    'Content-type': 'application/json; charset=UTF-8',
                    },
                    body: JSON.stringify(
                           values
                    ),
                });
                let resJson = await res.json()
                console.log(resJson)
                //if(res.status === 200 || 400){
                    // setValues({
                    //     magnitude: 0,
                    //     velocity: 0
                    // });
                    console.log("fetched Successfully")
                //}
                //else{
                //alert('some error occured')
                // }
            // console.log(res.values)
            setPredict(resJson)
            // //setPredict(parseFloat(resJson['predict'].toFixed(4)))
            // const response = await axios.post("http://127.0.0.1:5000/predict", values)
        }
        catch(err){
            alert(err)
        }
        
    }
    return(
        <>
        <NavScrollExample />
        {/* <img src={PredictImg} style={{width:1600,}} alt="prediction"></img> */}
        <body className="bg-dark" style={sectionStyle} style={{"marginTop": 100}}>
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}} style={sectionStyle}>
        <div className='w-100' style={{maxWidth: '400px'}}>
        <Card className="bg-light">
            <Card.Body>
                <h2 className='text-center mb-4' style={{color:'white',backgroundColor:'blue',padding:5}}>Prediction</h2>
                <Form>
                   <Form.Check id = 'text'>
                        <Form.Label><b>Age</b></Form.Label>
                        <Form.Control type = 'text' onChange={e => setValues((prev)=>({...prev, quote: e.target.value}))}required></Form.Control>
                        <Form.Label><b>Sex</b></Form.Label>
                        <Form.Check aria-label="option 1" label="Male"/>
                        <Form.Check aria-label="option 1" label="Female"/>
                        
                        {/* <Form.Control type = 'text' onChange={e => setValues((prev)=>({...prev, quote: e.target.value}))} required></Form.Control> */}
                        <Form.Label ><b>Interests</b></Form.Label>
                        <Form.Control type = 'text' onChange={e => setValues((prev)=>({...prev, quote: e.target.value}))} required></Form.Control>
                        <Form.Label><b>Enter the location</b></Form.Label>
                        <Form.Control type = 'text' onChange={e => setValues((prev)=>({...prev, quote: e.target.value}))}required ></Form.Control>
                    </Form.Check> 
                   
                    <Button onClick={handleSubmit} type="button" className='w-100 mt-4 bg-success' style={{backgroundColor:'red'}}>Predict</Button>
                </Form>
            </Card.Body>
            <Card.Body>
                <h2 className="text-center mb-4">These are the top people with similar interests:</h2>
                <h5 className="text-center mb-4">{predict.map((data) => {
                    
                    return <p>{data}<Button href="/chat" variant="primary">Would you like to connect with them</Button></p>
                })}</h5>
            </Card.Body>
        </Card>
        </div>
        </Container>
        </body>
        
        </>
    )
}