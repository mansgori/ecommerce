import React from 'react'
import { Card} from 'react-bootstrap'

const Maincard = (props) => {
    const data = props.card
  return (
    <div className='d-flex justify-content-between align-items-center' style={{marginLeft:"9vw", width:"100%"}}>
        {
            data.map((element, k)=>{
                return(
                    <div>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" style={{height:'35vh'}} src={element.url} />
                        <Card.Body>
                                <Card.Title>{element.tagline}</Card.Title>
                                <Card.Text>{element.discription}</Card.Text>
                            </Card.Body>
                        </Card> 
                    </div>
                )

            })
        }
        
    </div>
  )
}

export default Maincard