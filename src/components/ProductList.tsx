import { products } from "../data/data";
import ProductCard from "./ProductCard";
import type { Product } from "../data/data";

interface cartItem extends Product {
  quantity: number;
}

type Props = {
  cartItems: cartItem[];
  onAddToCart: (product: Product) => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
}; 

export const ProductList = ({
  cartItems,
  onAddToCart,
  onIncrement,
  onDecrement,
}: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {products.map((product) => {
        const cartItem = cartItems.find((item) => item.id === product.id);

        return (
          <ProductCard
            key={product.id}
            product={product}
            quantity={cartItem?.quantity ?? 0} 
            onAddToCart={onAddToCart}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        );
      })}
    </div>
  );
};
