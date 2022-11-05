import { Link } from 'react-router-dom'
import '../../utils/style/Error.css'

function Error() {
  
    return (
      <div className="Container">
   <div className="error-container">
    <h1 className="error-title">404</h1>
   <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/" className='error-accueil'>Retourner sur la page d’accueil</Link>
    </div> 
    </div>
    )
  }
  
  export default Error