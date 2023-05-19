import './Styles/NavBar.css';
import logo from '../Images/logo.png'

function NavBar() {
  return (
    <div className='navbar col-12'>
        <div className='logodiv col-2 m-auto'>
<img className='logoimg' src={logo} alt="logo" />
<p className='logotext'>TRIKAMPIS.ONLINE</p>
        </div>
        <div className='links col-8 col-lg-5'>
<button>Pagrindinis</button>
<button>Kategorijos</button>
<button>Apie mus</button>
        </div>

    </div>
  );
}

export default NavBar;