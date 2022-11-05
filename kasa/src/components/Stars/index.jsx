import '../../utils/style/Stars.css';
import { ReactComponent as EtoileCouleur } from '../../assets/star-full.svg';
import { ReactComponent as Etoile } from '../../assets/star-empty.svg';
import '../../utils/style/index.css';

function Stars({ logement }) {

    return (
        <div className='rating'>
            {[...Array(Number(logement.rating))].map((e, i) => {
                return <div key={i} className='star'>
                    <EtoileCouleur />
                  
                </div>
            })
            }
            {[...Array(5 - (logement.rating))].map((e, i) => {
                return <div key={i} className='star'>
                    <Etoile />
             
                </div>
            })
            }
        </div>
    )
}
export default Stars;
