import { sale } from "./constants";
import SaleCards from "./components/SaleCards";
// import { button } from "./constants";
import Button from "./components/Button";
import { popularCateg } from "./constants";
import PopularCateg from "./components/PopularCateg";
import PopularRes from "./components/PopularRes";
import { popRes } from "./constants";
import { signUp } from "./constants";
import Sign from "./components/Sign";
import Header from "./components/Header";
import HeroPg from "./components/HeroPg";
import KnowMore from "./components/KnowMore";
import Footer from "./components/Footer";
import OrangeBox from "./components/OrangeBox";
const App = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <HeroPg />
        <h2 className="h2">Up to -40% 🎊 Order.uk exclusive deals</h2>
        <div className="salesBox ">
          {sale.map((card) => (
            <SaleCards
              key={card.id}
              sale={card.sale}
              text={card.text}
              cafe={card.cafe}
              img={card.img}
            />
          ))}
        </div>
      </div>
      <div className="container ">
        <h2 className="h2">Order.uk Popular Categories 🤩</h2>
        <div className="popularCategPg ">
          {popularCateg.map((card) => (
            <PopularCateg
              key={card.id}
              img={card.img}
              food={card.food}
              restaurant={card.restaurant}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <h2 className="h2">Popular Restaurants</h2>
        <div className="popularCategPg">
          {popRes.map((res) => (
            <PopularRes key={res.id} img={res.img} text={res.text} />
          ))}
        </div>
      </div>
      <div className="container">
        <div className="signPg">
          {signUp.map((card) => (
            <Sign
              key={card.id}
              img={card.img}
              topT={card.topText}
              oText={card.oText}
              wText={card.wText}
            />
          ))}
        </div>
        <KnowMore />
        <OrangeBox />
      </div>

      <Footer />
    </div>
  );
};

export default App;
