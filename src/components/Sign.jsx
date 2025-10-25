
import Button from "./Button";
const Sign = ({topT,img, oText, wText}) => {
  return (
    <div
      className="signCard"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        height: `390px`,
        width: `585px`,
        position: `relative`,
        borderRadius: `12px`,
      }}
    >
      <div className="signTop">
        <h6>{topT}</h6>
      </div>
      <div className="signBottom">
        <h5>{oText}</h5>
        <h3>{wText}</h3>
        <Button variant="full">Get Started</Button>
      </div>
    </div>
  );
}

export default Sign