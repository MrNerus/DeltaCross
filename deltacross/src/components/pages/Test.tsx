import Button from "../Button";
import ProductCard from "../ProductCard";
import TextBox from "../TextBox";

function Test() {
  const entirePage = (
    <>
      <div className="playground">
        <TextBox isRequired />
        <TextBox isRequired isCensored />
        <TextBox textType="number" regex="[0-9]*" isRange max={12} min={1} />
        <TextBox tooltip="Hello Me" placeholder="I have tooltip" />
        <Button mode="secondary" onClick={() => {}}>
          <span className="material-symbols-outlined">shopping_cart</span>
        </Button>
        <ProductCard
          img_href="https://picsum.photos/200/300"
          img_alt="https://picsum.photos/200/300"
          product_name="101 Ways To Die"
          brand_name="Ard Nerus"
          max_rating={5}
          min_rating={0}
          rating={2}
          stock_quantity={23}
          price_before={595}
          price_now={495}
          tags={[
            "Lorem",
            "ipsum",
            "dolor",
            "sit",
            "amet",
            "consectetur",
            "adipisicing",
            "elit",
            "Vitae",
            "ducimus!",
            "Lorem",
            "ipsum",
            "dolor",
            "sit",
            "amet",
            "consectetur",
            "adipisicing",
            "elit",
            "Vitae",
            "ducimus!",
          ]}
        ></ProductCard>
        <ProductCard
          img_href="https://picsum.photos/200/300"
          img_alt="https://picsum.photos/200/300"
          product_name="Another 101 Ways To Die Part 2"
          brand_name="Ard Nerus"
          max_rating={5}
          min_rating={0}
          rating={4.3}
          stock_quantity={16}
          price_now={595}
        >
          "In 'Another 101 Ways To Die', author Ard Nerus takes readers on a thrilling journey through the inevitability
          of mortality. From the moment you open this book, you'll find yourself captivated by the relentless pace and
          the chilling realization that death is not something to be feared, but embraced. Each chapter presents a
          unique perspective on life and death, offering insights into the human condition that are both profound and
          thought-provoking. Whether it's the philosophical musings on the nature of existence or the gripping
          narratives that explore the darkest corners of the human psyche, every page is filled with wisdom and insight.
          But 'Another 101 Ways To Die' is not just a book about death. It's a celebration of life, a testament to the
          indomitable spirit of the human race. It's a reminder that despite the inevitability of our end, we can still
          find joy, love, and purpose in our brief time on Earth. So why wait? Dive into 'Another 101 Ways To Die' today
          and discover a world of wisdom, insight, and sheer entertainment. With over 16 copies in stock, there's never
          been a better time to add this masterpiece to your collection."
        </ProductCard>
      </div>
    </>
  );
  return entirePage;
}

export default Test;
