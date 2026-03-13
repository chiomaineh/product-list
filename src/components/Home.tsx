import { useEffect, useState } from "react";
import Cart from "./Cart";
import { ProductList } from "./ProductList";
import type { Product } from "../data/data";


interface CartItem extends Product {
  quantity: number;
}

function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("cartItems");
      return saved ? JSON.parse(saved) : [];
    } catch { 
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...prev, { ...product, quantity: 1 }],
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const increment = (productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.min(10, item.quantity + 1) }
          : item,
      ),
    );
  };

  const decrement = (productId: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    ); 
  };

  const resetCart = () => {
    setCartItems([])
  }
  
  return (
    <>
      <main className="min-h-screen background px-10 lg:block py-10">
        <h2 className="font-bold text-2xl md:text-4xl py-2 pl-4 lg:pl-0">
          Desserts
        </h2>

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
          {/* Left */}
          <section className="mt-10 w-full lg:flex-2">
            <ProductList
              cartItems={cartItems}
              onAddToCart={addToCart}
              onIncrement={increment}
              onDecrement={decrement}
            />
          </section>

          {/* Right */}
          <aside className="w-full lg:flex-1">
            <Cart
              items={cartItems}
              onIncrement={increment}
              onDecrement={decrement}
              onRemove={removeFromCart}
              onReset={resetCart}
            />
          </aside>
        </div>
      </main>
    </>
  );
}

export default Home;
