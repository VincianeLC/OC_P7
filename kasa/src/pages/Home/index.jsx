import '../../utils/style/Home.css';
import Card from '../../components/Card';
import PageBanner from '../../components/PageBanner';
import '../../utils/style/index.css';
import Logements from '../../data/data.json';
import Background from "../../assets/Background.jpg"

function Home() {
   return(
<div className='Home'>
<div className='TitleHome'><h1>Chez vous, partout et ailleurs.</h1></div>
    <PageBanner>
       <img src={Background} alt='Background' className='PageBannerImage'/></PageBanner> 
       <div className='Wrapper'>
      {Logements && Logements.map(logement => {
        return <Card key={logement.id} logement={logement}/>
       })
      }
      </div>
      </div>
   )
}
    export default Home;