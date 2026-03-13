import Empty from "../assets/images/illustration-empty-cart.svg";
import Remove from "../assets/images/icon-remove-item.svg";
import Carbon from "../assets/images/icon-carbon-neutral.svg";
import type { Product } from "../data/data";
import ConfirmModal from "./ConfirmModal";
import { useState } from "react"; 


export interface CartItem extends Product {
  quantity: number;
}

type Props = {
  items: CartItem[];
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
  onReset: () => void;

};

export default function Cart({ items, onRemove, onReset }: Props) {
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);



  if (items.length === 0) {
    return (
      <div className="lg:ml-10 ">
        <h3 className="price font-bold text-center lg:text-left ">
          Your Cart ({items.length})
        </h3>

        <div className="flex flex-col items-center mt-6">
          <img src={Empty} alt="Your cart is empty" />
          <p className="empty text-base">Your added items will appear here</p>
        </div>
      </div>
    );
  }

  const cartTotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <h3 className="price font-bold text-center mb-5 lg:text-left ">
        Your Cart ({items.length})
      </h3>
      <ul className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-4">
            {/*  Thumbnail */}
            <img
              src={item.image.thumbnail}
              alt={item.name}
              className="w-12 h-12 rounded-md object-cover"
            /> 

            {/* Info */}
            <div className="flex flex-col flex-1 gap-1">
              <p className="font-semibold flex">{item.name}</p>
              <div className="flex gap-5">
                <p className="text-accent font-bold text-sm flex">
                  {item.quantity}X
                </p>
                <span className="text-sm cart">${item.price.toFixed(2)}</span>

                <div>
                  <p className="cart text-sm">
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            {/* Quantity controls */}
            <button className="flex items-center justify-center gap-2 border-2 rounded-full border-accent w-5 h-5 cursor-pointer">
              <span>
                <img src={Remove} alt="" onClick={() => onRemove(item.id)} />
              </span>
            </button>
          </li>
        ))}

        <hr className="my-4" />

        <div className="flex justify-between font-bold text-lg">
          <p className="font-bold">Order Total : </p>
          <p>${cartTotal.toFixed(2)}</p>
        </div>

        <div className="background flex justify-center gap-2 p-2 ">
          <img src={Carbon} />
          <p className="text-xs"> 
            This is a <strong>carbon-neutral</strong> delivery.
          </p>
        </div>

        <button className="confirm cursor-pointer p-3 rounded-full flex justify-center w-full" onClick={() => setShowConfirmModal(true)}>
          Confirm Order
        </button>
      </ul>

      {showConfirmModal && (
        <ConfirmModal
        items={items}
        total={cartTotal} 
        onClose={() => setShowConfirmModal(false)}
        onReset={() => {
          onReset();
          setShowConfirmModal(false);
        }}
        />

      )}
    </>
  );
}
