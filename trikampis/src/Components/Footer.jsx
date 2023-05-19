import "./Styles/Footer.css";
import logo from "../Images/logo.png";
import eco from '../Images/eco.png'

function Footer() {
  return (
    <>
      <div className="line col-8 m-auto mt-5"></div>
      <div className="footer col-8 mt-3 m-auto">
        <div className="left-footer col-8">
          <img className="footer-logo" src={logo} alt="" />
          <p className="footer-text">TRIKAMPIS.ONLINE</p>
        </div>
        <div className="right-footer col-4">
          <h4>Nuorodos</h4>
          <p className="links">Pagrindinis</p>
          <p className="links">Kategorijos</p>
          <p className="links">Apie mus</p>
        </div>
      </div>
      <div className="line col-8 m-auto mt-2"></div>
      <div className="copyright col-12 mt-2">
          <p>
            © 2023. Svetainė talpinama Cometa.lt serveriuose, kurie naudoja
            energiją gaunamą iš saulės.{" "}
          </p>
          <img className="eco" src={eco} alt="" />
        </div>
    </>
  );
}

export default Footer;
