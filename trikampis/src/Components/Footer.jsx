import './Styles/Footer.css';
import logo from '../Images/logo.png'

function Footer() {
  return (
    <>
<div className='line col-8 m-auto mt-5'></div>
<div className='footer col-12 m-auto mt-3'>
    <div className='left-footer col-6 m-auto'>
    <img className='footer-logo' src={logo} alt="" />
    <p className='footer-text'>TRIKAMPIS.ONLINE</p>
    </div>
    <div className='right-footer col-6'>

    </div>
    <div className='copyright mt-5'>
<p className='m-auto'>© 2023. Svetainė talpinama Cometa.lt serveriuose, kurie naudoja energiją gaunamą iš saulės. </p>
    </div>

</div>
</>
  );
}

export default Footer;