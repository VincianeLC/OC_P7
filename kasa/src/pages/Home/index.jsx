
import './Home.css';
import Card from '../../components/Card';
import PageBanner from '../../components/PageBanner';
import '../../utils/style/index.css';
import '../../utils/style/PageBanner.css';
import Logements from '../../data/data.json';
import Background from "../../assets/Background.jpg"


function Home() {
   return(
<div className='Home'>
<img src={Background} alt='Background' className='PageBannerImage'/>
         <PageBanner>Chez vous, partout et ailleurs.</PageBanner> 
       
       <div className='Wrapper'>
      {Logements && Logements.map(logement => {
        return <Card key={logement.id} logement={logement}/>
       })
      }
      </div>
      </div>
      
     
      
      
     
  




   );
}
    export default Home;