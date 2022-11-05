import PageBanner from '../../components/PageBanner';
import '../../utils/style/index.css';
import Collapse from '../../components/Collapse';
import Background from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import '../../utils/style/About.css';

const infos = {
  fiabilité:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  respect:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  service:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  sécurité:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  
}

function About(props) {
const { fiabilité, respect, service, sécurité} = infos;
 
return (
  
  <div className='Collapse'>

  <PageBanner><img src={Background} alt='Background' className='PageBannerImage'/></PageBanner>

  <div className='CollapseBox'>
       <Collapse props={fiabilité}>Fiabilité</Collapse>
            <Collapse props={respect}>Respect</Collapse>
        <Collapse props={service}>Service</Collapse>
            <Collapse props={sécurité}>Sécurité</Collapse>
            </div>
            </div>
	)
  }

  export default About;



   
 

