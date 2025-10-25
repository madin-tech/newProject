import logo from "../assets/footerLogo.png";
import install from "../assets/install.png";
import Button from "./Button";
import facebook from "../assets/Facebook.png";
const Footer = () => {
  return (
    <footer>
      <div className="container footerTop">
        <div className="footerTop1">
          <img src={logo} alt="" />
          <img src={install} className="img" alt="" />
          <h6>
            Company # 490039-445, Registered with <br /> House of companies.
          </h6>
        </div>
        <div className="footerTop2">
          <h4>Get Exclusive Deals in your Inbox</h4>
          <div className="fBtn">
            <div className="footerIn">
              <input type="text" placeholder="youremail@gmail.com" />
              <Button variant="full">Search</Button>
            </div>
            <h6>we wont spam, read our email policy</h6>
          </div>
          <div className="footerIcons">
            <img src={facebook} alt="" />
            <img src={facebook} alt="" />
            <img src={facebook} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
        <div className="footerText">
          <h5>Legal Pages</h5>
          <a href="">Terms and conditions</a>
          <a href="">Terms and conditions</a>
          <a href="">Terms and conditions</a>
          <a href="">Terms and conditions</a>
        </div>
        <div className="footerText">
          <h5>Legal Pages</h5>
          <a href="">Terms and conditions</a>
          <a href="">Terms and conditions</a>
          <a href="">Terms and conditions</a>
          <a href="">Terms and conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer