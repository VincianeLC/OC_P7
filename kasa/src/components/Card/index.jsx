import { Link } from 'react-router-dom'
import './Card.css'


function Card(props) {
	return (
	

<Link className='box' 
	to ={`/logement/${props.logement.id}`} > 
	
<img src={props.logement.cover} alt='cover' />

<div className='BOX'>
	<h1>{ props.logement.title}</h1>
</div>
		
</Link>

  );
		
}

export default Card