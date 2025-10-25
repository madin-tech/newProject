const SaleCards = (props) => {
  return (
    <div
      className="saleCard"
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        width: `380px`,
        height: `300px`,
        position: `relative`,
        borderRadius:`12px`
      }}
    >
      <div className="saleSale">
        <h6>{props.sale}</h6>
      </div>
      <div className="saleTexts">
        <p>{props.text}</p>
        <h5>{props.cafe}</h5>
      </div>
    </div>
  );
};

export default SaleCards;
