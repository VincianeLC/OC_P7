import '../../utils/style/Carousel.css';
import { useState } from 'react';
import { ReactComponent as ArrowLeft } from '../../assets/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow_right.svg';



function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

  

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
 
    if (length === +1 ) 
    return  <div className='carousel'>
    {slides &&
        <img src={slides[current]} alt={`carousel img ${current}`} className='carouselImg' />
    }
   
</div>


    else
 return(


        <div className='carousel'>
            {slides &&
                <img src={slides[current]} alt={`carousel img ${current}`} className='carouselImg' />
            }
            <div className='Arrows'>
            <div className='carouselArrowLeft'>
                <ArrowLeft onClick={prevSlide} />
            </div>

            <div className='carouselArrowRight'>
                <ArrowRight onClick={nextSlide} />
            </div>
            </div>
        </div>
    )
}

export default Carousel

