import React from 'react'
import ImageData from './Data/ImageData'
import Topnavigation from './Navigation/Topnavigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Maincard from './card/Maincard';

const Home = () => {
    const backgroundImage = ImageData[0].BackgroundImage.url;
    const logo = ImageData[1].Logo.url;
    const location = ["Mumbai", "Banglore", "Chennai", "Delhi", "Ahemedabad", "Pune"];
    const card = ImageData[2].primaryCardData;

    
  return (
    <div className='container' style={{margin: '0px', padding: '0px'}}>
        <div className='Topcosntainer' style={{backgroundImage : `url(${backgroundImage})`, width: '100vw',height:'70vh',
        
    }}>
            <Topnavigation  image={logo} location={location[0]}/>
          </div>
          <section className='item_section mt-4 container'>
               <Maincard card={card} />
            </section> 
      </div>
  )
}

export default Home