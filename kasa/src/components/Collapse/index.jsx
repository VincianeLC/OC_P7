import { useState } from 'react'
import '../../utils/style/Collapse.css'
import { ReactComponent as Arrow } from '../../assets/arrow-coll.svg';
import '../../utils/style/index.css';


function Collapse({title, props}) {

	
const [isOpen, setIsOpen] = useState({})

	return isOpen ? (
		<div className='TheBigFlex'>

		<div className='CollapseBox'>
      
			 <div className='collapse-title'>{title}
			 <Arrow className='collapse-toggle-button-open'
				onClick={() => setIsOpen(false)}/>
			</div>
	
			
			
</div>
				</div>	

	) : (

		<div className='TheBigFlex'>
		<div className='CollapseBox'>
	
			 <div className='collapse-title'>{title}
			 <Arrow className='collapse-toggle-button-closed' onClick={() => setIsOpen(true)}/>
			</div>
			<div className='collapse-text'>
				{ (props.constructor === String) ?
					<p>{props}</p> : 
					props.map((e, i)=>
						<ul key={i}><li>{e}</li></ul>
						  )}
					</div>
			</div>	
			</div>
		
	)
  }


  export default Collapse;
