// import { popularCateg } from "./constants";
const PopularCateg = (props) => {
  return (
    <div className="popularCard">
      <div
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
          height: `160px`,
          width: `190px`,
        }}
      ></div>
      <div className="popularText">
        <h6>{props.food}</h6>
        <p>{props.restaurant}</p>
      </div>
    </div>
  );
};

export default PopularCateg;
