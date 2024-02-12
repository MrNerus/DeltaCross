import ProductCard from "../ProductCard";

const myJson = {
  "top_picks": {
    "1": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "101 Ways To Die",
      "brand_name": "Ard Nerus",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 2,
      "stock_quantity": 23,
      "price_before": 595,
      "price_now": 495,
      "tags": ["Lorem", "ipsum", "dolor"],
    },
    "2": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Silent Killer",
      "brand_name": "Ard Nerus",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 4,
      "stock_quantity": 7,
      "price_before": NaN,
      "price_now": 495,
      "tags": ["Horror", "Thrill", "Fantasy"],
    },
    "3": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Down-side Up",
      "brand_name": "Ard Nerus",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 4.7,
      "stock_quantity": 55,
      "price_before": NaN,
      "price_now": 595,
      "tags": ["Sci-Fi", "Motivational", "Abnormal"],
    },
    "4": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Messing With God",
      "brand_name": "Ard Nerus",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 0.5,
      "stock_quantity": 8,
      "price_before": NaN,
      "price_now": 695,
      "tags": ["Super Natural", "Spritual", "Fiction"],
    },
    "5": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Eternal Flames",
      "brand_name": "Mystic Books",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 3.8,
      "stock_quantity": 15,
      "price_before": 750,
      "price_now": 650,
      "tags": ["Fantasy", "Adventure", "Magic"],
    },
    "6": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Whispers in the Shadows",
      "brand_name": "Mystic Books",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 4.5,
      "stock_quantity": 20,
      "price_before": NaN,
      "price_now": 720,
      "tags": ["Mystery", "Suspense", "Intrigue"],
    },
    "7": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Chronicles of the Unknown",
      "brand_name": "Enigma Press",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 4.2,
      "stock_quantity": 30,
      "price_before": 800,
      "price_now": 680,
      "tags": ["Adventure", "Mythology", "Discovery"],
    },
    "8": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Beyond the Horizon",
      "brand_name": "Enigma Press",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 3.5,
      "stock_quantity": 25,
      "price_before": NaN,
      "price_now": 750,
      "tags": ["Science Fiction", "Exploration", "Futuristic"],
    },
    "9": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Lost in Time",
      "brand_name": "Temporal Tales",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 4.8,
      "stock_quantity": 18,
      "price_before": 900,
      "price_now": 850,
      "tags": ["Time Travel", "Historical", "Temporal"],
    },
    "10": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Shattered Realms",
      "brand_name": "Quantum Quill",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 4.0,
      "stock_quantity": 12,
      "price_before": NaN,
      "price_now": 700,
      "tags": ["Fantasy", "Dystopian", "Parallel Worlds"],
    },
  },
  "latest_on_shelf": {
    "1": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Echoes of Eternity",
      "brand_name": "Eternal Books",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 4.6,
      "stock_quantity": 22,
      "price_before": 820,
      "price_now": 780,
      "tags": ["Mystical", "Spiritual", "Eternal"],
    },
    "2": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Stars Aligned",
      "brand_name": "Galactic Press",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 3.9,
      "stock_quantity": 28,
      "price_before": NaN,
      "price_now": 690,
      "tags": ["Space Opera", "Aliens", "Galactic"],
    },
    "3": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Whirlwind of Dreams",
      "brand_name": "Dreamweaver Publications",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 4.4,
      "stock_quantity": 16,
      "price_before": 780,
      "price_now": 740,
      "tags": ["Dreamscape", "Fantasy", "Imagination"],
    },
    "4": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Uncharted Realms",
      "brand_name": "Adventure Books",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 3.7,
      "stock_quantity": 33,
      "price_before": NaN,
      "price_now": 710,
      "tags": ["Adventure", "Exploration", "Unknown"],
    },
    "5": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Whispers of the Ancients",
      "brand_name": "Ancient Mysteries",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 4.2,
      "stock_quantity": 10,
      "price_before": 680,
      "price_now": 620,
      "tags": ["Historical", "Mystery", "Ancient"],
    },
    "6": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Cipher of Shadows",
      "brand_name": "Cryptic Publications",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 4.7,
      "stock_quantity": 14,
      "price_before": NaN,
      "price_now": 750,
      "tags": ["Thriller", "Cryptic", "Enigma"],
    },
    "7": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Voyage to Infinity",
      "brand_name": "Infinity Books",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 3.9,
      "stock_quantity": 20,
      "price_before": 720,
      "price_now": 680,
      "tags": ["Science Fiction", "Space", "Infinite"],
    },
    "8": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Enchanted Chronicles",
      "brand_name": "Enchanted Tales",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 4.5,
      "stock_quantity": 18,
      "price_before": NaN,
      "price_now": 780,
      "tags": ["Fantasy", "Enchantment", "Fairy Tale"],
    },
    "9": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Realm of Reflections",
      "brand_name": "Reflective Press",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 4.0,
      "stock_quantity": 25,
      "price_before": 800,
      "price_now": 740,
      "tags": ["Philosophical", "Reflective", "Thought-Provoking"],
    },
    "10": {
      "img_href": "https://picsum.photos/200/300",
      "img_alt": "https://picsum.photos/200/300",
      "product_name": "Spectral Whispers",
      "brand_name": "Ethereal Books",
      "max_rating": 5,
      "min_rating": 0,
      "rating": 3.6,
      "stock_quantity": 30,
      "price_before": NaN,
      "price_now": 710,
      "tags": ["Supernatural", "Ghosts", "Ethereal"],
    },
  },
};

interface ProductDetail {
  img_href?: string;
  img_alt?: string;
  product_name: string;
  brand_name?: string;
  max_rating?: number;
  min_rating?: number;
  rating?: number;
  stock_quantity?: number;
  price_before?: number;
  price_now?: number;
  tags?: string[];
}

function Home() {
  const content: Record<string, Record<string, ProductDetail>> = myJson;
  // const top_picks_obj:Object = myJson["top_picks"];

  myJson["top_picks"];
  const page = (
    <>
      <div className="panel">
        <h1>Top Picks</h1>
        <div className="horizontalPanel">
          {Object.keys(content["top_picks"]).map((key) => (
            <ProductCard
              img_href={content["top_picks"][key].img_href}
              img_alt={content["top_picks"][key].img_alt}
              product_name={content["top_picks"][key].product_name}
              brand_name={content["top_picks"][key].brand_name}
              max_rating={content["top_picks"][key].max_rating}
              min_rating={content["top_picks"][key].min_rating}
              rating={content["top_picks"][key].rating}
              stock_quantity={content["top_picks"][key].stock_quantity}
              price_before={content["top_picks"][key].price_before}
              price_now={content["top_picks"][key].price_now}
              tags={content["top_picks"][key].tags}
              key={key}
            ></ProductCard>
          ))}
        </div>
      </div>
      <div className="panel">
        <h1>Latest On Shelf</h1>
        <div className="horizontalPanel">
          {Object.keys(content["latest_on_shelf"]).map((key) => (
            <ProductCard
              img_href={content["latest_on_shelf"][key].img_href}
              img_alt={content["latest_on_shelf"][key].img_alt}
              product_name={content["latest_on_shelf"][key].product_name}
              brand_name={content["latest_on_shelf"][key].brand_name}
              max_rating={content["latest_on_shelf"][key].max_rating}
              min_rating={content["latest_on_shelf"][key].min_rating}
              rating={content["latest_on_shelf"][key].rating}
              stock_quantity={content["latest_on_shelf"][key].stock_quantity}
              price_before={content["latest_on_shelf"][key].price_before}
              price_now={content["latest_on_shelf"][key].price_now}
              tags={content["latest_on_shelf"][key].tags}
              key={key}
            ></ProductCard>
          ))}
        </div>
      </div>
    </>
  );

  return page;
}

export default Home;
