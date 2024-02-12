import Button from "./Button";
import TextBox from "./TextBox";
import RatingStar from "./RatingStar";
import PriceTag from "./PriceTag";
import TaggingPill from "./TaggingPill";

interface Props {
  img_href?: string;
  img_alt?: string;
  rating?: number;
  max_rating?: number;
  min_rating?: number;
  product_name: string;
  brand_name?: string;
  children?: string;
  stock_quantity?: number;
  stock_unit?: string;
  price_before?: number;
  price_now?: number;
  tags?: string[];
  handle_cart_click?: () => {};
  handle_card_click?: () => {};
}

// #ff4444	#-fe-43-43
// #ff8844	#-fe-87-43
// #ff4488	#-fe-43-86
// #ffff44	#-fe-fe-43
// #44ff44	#-43-fe-43
// #44ff88	#-43-fe-87
// #88ff44	#-87-fe-43
// #44ffff	#-43-fe-fe
// #4444ff	#-43-43-fe
// #8844ff	#-86-43-fe
// #4488ff	#-43-87-fe
// #ff44ff	#-fe-43-fd

function GetColor(index: number) {
  const colors = [
    "#fe4343",
    "#fe8743",
    "#fe4386",
    "#fefe43",
    "#43fe43",
    "#43fe87",
    "#87fe43",
    "#43fefe",
    "#4343fe",
    "#8643fe",
    "#4387fe",
    "#fe43fd",
  ];
  return colors[index % 12];
}
function GetBackground(index: number) {
  const colors = [
    "#ff4444",
    "#ff8844",
    "#ff4488",
    "#ffff44",
    "#44ff44",
    "#44ff88",
    "#88ff44",
    "#44ffff",
    "#4444ff",
    "#8844ff",
    "#4488ff",
    "#ff44ff",
  ];
  return colors[index % 12];
}

const ProductCard = (prop: Props) => {
  const img_href = prop.img_href ? prop.img_href : "";
  const img_alt = prop.img_alt ? prop.img_alt : "";
  const rating = prop.rating === undefined ? NaN : prop.rating;
  const min_rating = prop.min_rating === undefined ? NaN : prop.min_rating;
  const max_rating = prop.max_rating === undefined ? NaN : prop.max_rating;
  const stock_unit = prop.stock_unit === undefined ? "Unit" : prop.stock_unit;
  const price_before = prop.price_before === undefined ? NaN : prop.price_before;
  const price_now = prop.price_now === undefined ? NaN : prop.price_now;
  const product_name = prop.product_name ? prop.product_name : "Insert Registered Name";
  const brand_name = prop.brand_name ? prop.brand_name : "Tnsert Registered Brand";
  const tags = prop.tags ? prop.tags : [];
  // const description = prop.children
  // ? prop.children
  // : "No description available";
  const stock_quantity = prop.stock_quantity ? prop.stock_quantity : NaN;

  return (
    <div className="productCard">
      <div className="left">
        <img src={img_href} alt={img_alt} />
        <div className="rating">
          <RatingStar rating={rating} max_rating={max_rating} min_rating={min_rating} star_count={5} />
          <span>{rating}</span>
        </div>
      </div>
      <div className="right">
        <div className="cardInfo">
          <h2>{product_name}</h2>
          <p>{brand_name}</p>
          {/* <p className="desc">{description}</p> */}
          <div className="taggingPillContainer">
            {tags.map((tag, index) => (
              <TaggingPill tag={tag} bgColor={GetBackground(index)} color={GetColor(index)} key={index} />
            ))}
          </div>
        </div>
        <div className="cardOptions">
          <div className="price">
            <span className="material-symbols-outlined">sell</span>
            <PriceTag before={price_before} now={price_now} />
          </div>
          <div className="stockCount">
            <span className="material-symbols-outlined">inventory_2</span> {" Stock Available: "}
            {stock_quantity} {stock_unit}
          </div>
          <div className="purchase">
            <TextBox
              textType="number"
              isRange
              min={1}
              max={stock_quantity}
              tooltip="Quantity"
              defaultValue="1"
              isRequired
            />
            <Button mode="secondary" onClick={() => {}}>
              <span className="material-symbols-outlined">shopping_cart</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
