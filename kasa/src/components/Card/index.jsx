import { Link } from 'react-router-dom'
import '../../utils/style/Card.css'


function Card(props) {
	return (
	

<Link className='CardContainer' 
	to ={`/logement/${props.logement.id}`} > 
	
<img src={props.logement.cover} alt='cover' />

<div className='CardContent'>
	<h2>{ props.logement.title}</h2>
</div>
		
</Link>

  );
		
}

export default Card