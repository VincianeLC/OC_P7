import React from 'react'
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import '../../utils/style/Logement.css'
import logements from '../../data/data.json';
import Collapse from '../../components/Collapse';
import Stars from '../../components/Stars';
import Error from '../../components/Error';




function Logement() {
  const { id } = useParams(); 
  
  let logementExist = logements.filter(logement => logement.id === id);
   if (logementExist[0] === undefined ) return <Error/>
   else
return(
    <div className='Flex'>

      {logements && logements.filter(logement => logement.id === id)
        .map((logement, i) => {
          console.log(logement);
          return <div className='LogementContainer' key={i}>
            
           <Carousel slides={logement.pictures} />
     
              <div className='TheBigFlex'>
            <div className='content'> 

              <div className='Title'>
                  <h1>{logement.title}</h1>
                  <h2>{logement.location}</h2>
                  </div>


                  <div className='TAGContainer'>
              <ul>
                {logement.tags.map((tag, i)=>
                <li key={i}>{tag}</li>
                  )}
                  </ul>
                
             
                  </div>
              
              </div>
                  <div className='profileContent'>
                  <div className='profileInfos'>
                  <p>{logement.host.name}</p>
                  <div className='profilePicture'> <img src={logement.host.picture} alt='profilepicture' /></div>
              
                  </div> 

                  <Stars key={i} logement={logement} /> </div>
</div>
            
          
            
           
          
      <div className='BigColBox'><Collapse props={logement.description}><h2>Description</h2></Collapse>
              <Collapse  props= {logement.equipments}><h2>Equipements </h2></Collapse></div>

                 
                
             
           </div>


        } )

      }

    </div>
  )
}

export default Logement
