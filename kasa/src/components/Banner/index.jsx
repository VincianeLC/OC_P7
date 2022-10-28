import { Link } from 'react-router-dom'
import '../../utils/style/Banner.css'
import logo from "../../assets/LOGO.svg"


function Banner() {
	return (
		<div className='banner'>
			<img src={logo} alt='Kasa'/>
    
<ul className='Links'>
	
		<li><Link to="/">Accueil</Link></li>
	<li><Link to="/about">A propos</Link></li>
	</ul>
	</div>

	)
}

export default Banner