import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import '../../utils/style/Logement.css'
import Logements from '../../data/data.json';
import Collapse from '../../components/Collapse';



function Logement() {
    const { id } = useParams();
  
    return (
    
         <div className='container'>

          {Logements && Logements.filter(logement  => logement.id === id)
        .map(logement => {
        return   <div className='logementImage' key={logement.id} >
        <Carousel slides={logement.pictures} />
<div className='TheBigFlex'>
      <div className='content'>

        <div className='Title'>
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
        </div>

        <div className='TAGContainer'> <ul className="TAG"><li>{logement.tags}</li></ul></div>
       
        </div>
        
  

        <div className='profileContent'>
          <div className='profileInfos'>
            <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt='profilepicture' />
        </div>

        <div className='profileRating'>{logement.rating}</div>
        </div>
        </div>
        <div className='ColBox'>
        <div className='Col1'>
          <Collapse props={logement.description}>Description</Collapse>
    </div>
          <div className='Col2'>
        <Collapse props={logement.equipments}>Equipement</Collapse>
        </div></div></div>
   
       

        
       })
      
}

</div>
    )}
  
  export default Logement