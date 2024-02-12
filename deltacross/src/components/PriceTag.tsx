interface Props {
  before?: number;
  now?: number;
}
const PriceTag = (prop: Props) => {
  const before = prop.before === undefined ? NaN : prop.before;
  const now = prop.now === undefined ? NaN : prop.now;
  let priceTag: JSX.Element;
  if (isNaN(before)) {
    priceTag = (
      <div className="priceTag">
        <span className="after">Rs. {now} /-</span>
      </div>
    );
  } else {
    priceTag = (
      <div className="priceTag">
        <span className="before">Rs. {before} /-</span>
        <span className="after">Rs. {now} /-</span>
      </div>
    );
  }
  return priceTag;
};

export default PriceTag;
