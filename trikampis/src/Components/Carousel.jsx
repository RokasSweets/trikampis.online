import './Styles/Carousel.css';
import picture from '../Images/carousel1.jpg'

function Carousel() {
  return (
<div className='carousel col-10 mt-4 m-auto'>
    <img src={picture} alt="carousel1" />
    <h1>Sveiki atvykę!</h1>

</div>
  );
}

export default Carousel;