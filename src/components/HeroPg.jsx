import Button from "./Button";
import sms from "../assets/sms.png";
import girl from "../assets/heroGirl.png";
// import orangeBg from "../assets/orangeBg.png";
const HeroPg = () => {
  return (
    <section className="container herPg">
      <div className="herPgLeft">
        <h6>Order Restaurant food, takeaway and groceries.</h6>
        <h2>
          Feast Your Senses, <br />
          <span> Fast and Fresh</span>
        </h2>
        <p>Enter a postcode to see what we deliver</p>
        <div className="heroIn">
          <input type="text" placeholder="e.g. EC4R 3TE" />
          <Button variant="full">Search</Button>
        </div>
      </div>

      <div className="heroPgRightBox">
        <div className="heroPgRight">
          <img src={girl} className="girlImg" alt="" />
          <img src={sms} className="sms1" alt="" />
          <img src={sms} className="sms2" alt="" />
          <img src={sms} className="sms3" alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroPg