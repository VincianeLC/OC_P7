import { useState } from 'react'
import './Collapse.css'
import Arrow from '../../assets/Vector.svg'
import '../../utils/style/index.css';


function Collapse({children, props}) {

const [isOpen, setIsOpen] = useState({})

	return isOpen ? (
	
	
		<div className='CollapseBox'>
      <div className='collapse-title'>{children}
			<button
				className='collapse-toggle-button'
				onClick={() => setIsOpen(false)}
			><img className='Open'src={Arrow} alt='Open Button'/>
			
			</button>
      </div>
	
				<div className='collapse-text'>{props}</div>
			

				</div>

	) : (

		
		
			 <div className='collapse-title'>{children}<button
				className='collapse-toggle-button'
				onClick={() => setIsOpen(true)}
			>
			
				<img className='Closed' src={Arrow} alt='Close Button'/>
			</button></div>

		
		
				
		
	)
  }


  export default Collapse;
