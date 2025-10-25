import location from "../assets/Location.png";
import basket from "../assets/basket.svg";
import download from "../assets/download.svg";
import headerLogo from "../assets/headerLogo.png";
import Button from "./Button";
import user from "../assets/user.svg"
const Header = () => {
  return (
    <header>
      <div className="headerTop">
        <div className="headerTopLeft">
          <h5>
            🌟 Get 5% Off your first order, <span>Promo: ORDER5</span>
          </h5>
        </div>
        <div className="headerTopMid">
          <div className="img">
            <img src={location} alt="" />
          </div>
          <h5>Regent Street, A4, A4201, London</h5>
          <a href="">Change Location</a>
        </div>
        <div className="headerTopRight">
          <div className="green border1">
            <img src={basket} alt="" />
          </div>
          <div className="green">
            <h6>23 Items</h6>
          </div>
          <div className="green">
            <h6>GBP 79.89</h6>
          </div>
          <div className="green border2">
            <img src={download} alt="" />
          </div>
        </div>
      </div>
      <div className="headerBottom">
        <img src={headerLogo} alt="" />
        <div className="headerBottomRight">
          <nav>
            <a href="">Home</a>
            <a href="">Browse Menu</a>
            <a href="">Special Offers</a>
            <a href="">Restaurants</a>
            <a href="">Track Order</a>
          </nav>
          <Button variant="fullBlack" icon={true}>
            <img src={user} alt="" />
            Login/Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;