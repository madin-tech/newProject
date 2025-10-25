// import { button } from "../constants";

const Button = ({ children, variant, icon=false, col=false }) => {
 
if (variant === "full" && col) {
return(
  <div>
    <button className="btnFullCol">{children}</button>
  </div>
);
}

  if(variant==="full"&&col===false){
  return (
    <div>
      <button className="btnFull" >{children}</button>
    </div>
  );
}
if (variant === "fullBlack" && icon) {
  return (
    <div>
      <button className="blackBg btnFlex">{children}</button>
    </div>
  );
}



};

export default Button;
