import Button from "./Button";
import know1 from "../assets/know1.png";
import know2 from "../assets/know2.png";
import know3 from "../assets/know3.png";
const KnowMore = () => {
  return (
    <section className="knowPg">
      <div className="knowTop">
        <h2>Know more about us!</h2>
        <div className="navigate">
          <a href="">Frequent Questions</a>
          <a href="">Who we are?</a>
          <a href="">Partner Program</a>
          <a href="">Help&Support</a>
        </div>
      </div>
      <div className="knowBlack">
        <div className="knowBlackLeft">
          <Button variant="full" col={true}>
            How does Order.UK work?
          </Button>
          <h6>What payment methods are accepted?</h6>
          <h6>What payment methods are accepted?</h6>
          <h6>What payment methods are accepted?</h6>
          <h6>What payment methods are accepted?</h6>
        </div>
        <div className="knowBlackRight">
          <div className="knowCards">
            <div className="knowCard">
              <h6 className="text1">Place an Order!</h6>
              <img src={know1} alt="" />
              <h6 className="text2">
                Place order through our <br />
                website or Mobile app
              </h6>
            </div>
            <div className="knowCard">
              <h6 className="text1">Place an Order!</h6>
              <img src={know2} alt="" />
              <h6 className="text2">
                Place order through our <br />
                website or Mobile app
              </h6>
            </div>
            <div className="knowCard">
              <h6 className="text1">Place an Order!</h6>
              <img src={know3} alt="" />
              <h6 className="text2">
                Place order through our <br />
                website or Mobile app
              </h6>
            </div>
          </div>
          <h4>
            Order.UK simplifies the food ordering process. Browse through our
            diverse menu, <br /> select your favorite dishes, and proceed to checkout.
            Your delicious meal will be <br /> on its way to your doorstep in no time!
          </h4>
        </div>
      </div>
    </section>
  );
}

export default KnowMore