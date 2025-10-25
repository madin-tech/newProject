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
      <div className="popRes">
        <h6>{props.text}</h6>
        
      </div>
    </div>
  );
};

export default PopularCateg;
