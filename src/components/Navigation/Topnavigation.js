import React from 'react'
import { Form } from 'react-bootstrap'

const Topnavigation = (props) => {
  return (
    <>
    <div className='top-container d-flex justify-content-between align-items-center'>
             <p style={{marginLeft:"5vw", color:"white", marginTop:"20px"}}>Get the App</p> 
            <div style={{display:"flex", marginTop:"20px"}}>
            <p style={{color:"white", marginRight:"20px"}}>Log in</p>
            <p style={{color:"white", marginRight:"5vw"}}>Sign up</p>
            </div>
            
        </div>
        <img src={props.image} alt='' className='d-flex align-items-center' style={{width:"20rem", position:"relative", cursor:"pointer", margin:"auto", marginTop:"40px", marginBottom:"20px"}} />
        <p style={{color:"white", textAlign:"center", fontSize:"3rem"}}>Discover food and drinks in {props.location}</p>
        <div className='align-items-center' style={{display:"grid", justifyContent:"center"}}>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" style={{width:"500px", height:"3rem"}} placeholder="Search for restaurant, cuisine or a dish" />
          </Form.Group>
      </Form>
      </div>
      </>
  )
}

export default Topnavigation