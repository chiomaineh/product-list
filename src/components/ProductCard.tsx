import type { Product } from "../data/data";
import Add from "../assets/images/icon-add-to-cart.svg";
import Decrease from "../assets/images/icon-decrement-quantity.svg";
import Increase from "../assets/images/icon-increment-quantity.svg";

type Props = {
  product: Product;
  quantity: number;
  onAddToCart: (product: Product) => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
};

const ProductCard = ({ product, quantity, onAddToCart, onIncrement, onDecrement }: Props) => {
  const isSelected = quantity > 0;

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIncrement(product.id);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDecrement(product.id);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div>
      <div>
        {/* Image container */}
        <div
          className={`relative transition-all duration-200 ${isSelected ? "border-2 rounded-lg price" : "border-none"}`}
        >
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={product.image.desktop}
            />
            <source media="(min-width: 768px)" srcSet={product.image.tablet} />
            <img
              src={product.image.mobile}
              alt={product.name}
              className="w-full rounded-lg"
              loading="lazy"
            />
          </picture>

          <div
            className={`cart absolute -bottom-5 left-1/2 -translate-x-1/2 border cursor-pointer shadow flex items-center justify-between gap-3 font-semibold rounded-full transition-all duration-200 ${isSelected ? "bg-accent text-white w-3/4 px-3 py-2" : "bg-white text-black px-6 py-3"}`}
          >
            {isSelected ? (
              <>
                {/* Decrease button */}
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white transition hover:bg-white hover:bg-opacity-20" 
                >
                  <img src={Decrease} alt="Decrease" />
                </button>

                {/* Quantity display */}
                <span className="font-semibold text-white">{quantity}</span>

                {/* Increase button */}
                <button
                  type="button"
                  onClick={handleIncrement}
                  className={`w-8 h-8 flex items-center justify-center rounded-full border border-white transition hover:bg-white hover:bg-opacity-20 ${quantity >= 10 ? "opacity-50 cursor-not-allowed": "hover:bg-white hover:bg-opacity-0"} `}

                >
                  <img src={Increase} alt="Increase" />
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={handleAddToCart}
                className="whitespace-nowrap flex gap-2 items-center w-full justify-center"
              >
                <img src={Add} alt="" />
                Add to Cart
              </button>
            )}
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-8">{product.category}</p>
        <h2 className="text-base font-bold mt-2">{product.name}</h2>
        <p className="price font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard; 