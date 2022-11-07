import React from 'react'
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import '../../utils/style/Logement.css'
import logements from '../../data/data.json';
import Collapse from '../../components/Collapse';
import Stars from '../../components/Stars';
import Error from '../../components/Error';


function Logement() {
  // Passage de l'id dans l'Url
  //The useParams hook returns an object of key/value pairs 
  //of the dynamic params from the current URL that were matched
  // by the <Route path>.
  //Child routes inherit all params from their parent routes.

  const { id } = useParams(); 
  
  // Si le logement n'existe pas on renvois le composant Error 
  let logementExist = logements.filter(logement => logement.id === id);
   if (logementExist[0] === undefined ) return <Error/>
   
   //Si le logement existe on recherche et retourne les élements de la page logement remplis
   // en fonction de l'id passée dans l'url, on map 
   // les éléments correspondant à l'id du logement en question, on lui passe une key unique 
   //pour ne pas avoir d'erreur.
   else
return(
    <div className='Flex'>

      {logements && logements.filter(logement => logement.id === id)
        .map((logement, i) => {
          // Utilisation des composants, Carousel, Stars et Collapse et insertion des infos
          return <div className='LogementContainer' key={i}>

           <Carousel slides={logement.pictures} />
     
              <div className='TheBigFlex'>
            <div className='content'>

              <div className='Title'>
                  <h1>{logement.title}</h1>
                  <h2>{logement.location}</h2>
                  </div>

{/* map et passage de la key pour renvoyer un tag unique. */}
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
{/* map et passage de la key pour renvoyer le rating correspondant au logement unique. */}
                  <Stars key={i} logement={logement} /> </div>
</div>
            
          
            
           
          {/* Passage des props pour alimenter le Collapse dynamiquement 
          children is a special prop, automatically passed to every component, 
          that can be used to render the content included between the opening 
          and closing tags when invoking a component. These kinds 
          of components are identified by the official documentation as “boxes”.*/}
      <div className='BigColBox'><Collapse props={logement.description}><h2>Description</h2></Collapse>
              <Collapse  props= {logement.equipments}><h2>Equipements </h2></Collapse></div>

                 
                
             
           </div>


        } )

      }

    </div>
  )
}

export default Logement