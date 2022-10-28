

import PageBanner from '../../components/PageBanner';
import '../../utils/style/index.css';
import '../../utils/style/PageBanner.css';
import Collapse from '../../components/Collapse';
import Background from "../../assets/Background.jpg"


function About() {

return (
    

  <div className='Home'>
  <img src={Background} alt='Background' className='PageBannerImage'/>
           <PageBanner>Chez vous, partout et ailleurs.</PageBanner> 
           
          
       
         
            <Collapse>Number 1 Number 2</Collapse>
			<Collapse>Number 2</Collapse></div>
	
	)
  }


  export default About;
