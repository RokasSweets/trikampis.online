import './Styles/NavBar.css';
import logo from '../Images/logo.png'

function NavBar() {
  return (
    <div className='navbar col-12 col-lg-8 m-auto mt-2'>
        <div className='logodiv col-2'>
<img className='logoimg' src={logo} alt="logo" />
<p className='logotext'>TRIKAMPIS.ONLINE</p>
        </div>
        <div className='links col-5'>
<button>Pagrindinis</button>
<button>Kategorijos</button>
<button>Apie mus</button>
        </div>

    </div>
  );
}

export default NavBar;