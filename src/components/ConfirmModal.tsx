// import React from 'react';
// import { useState } from "react";
import Confirmed from "../assets/images/icon-order-confirmed.svg";
import type { CartItem } from "./Cart";

type Props = {
  items: CartItem[];
  total: number;
  onReset: () => void;
  onClose: () => void; 
};



function ConfirmModal({ items, total, onReset }: Props) {

  return (
    <>
      <main className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center backdrop-blur-sm">
        <section
          className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-lg mx-4 relative flex flex-col gap-3 "
          onClick={(e) => e.stopPropagation()}
        >
          <img src={Confirmed} alt="Confirmed" className="w-10 h-10" />
          <h3 className="font-bold">Order Confirmed</h3>
          <p className="cart text-xs">We hope you enjoy your food !</p>

          <ul className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                {/*  Thumbnail Images */}
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
                    <span className="text-sm cart">
                      ${item.price.toFixed(2)}
                    </span>

                    <div>
                      <p className="cart text-sm">
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            <hr className="cart"/>
            <p className="font-bold">Order total : ${total.toFixed(2)} </p>
          </ul>

          <button className="confirm cursor-pointer p-3 rounded-full flex justify-center w-full" onClick={onReset}>
            Start New Order
          </button>
        </section>
      </main>
    </>
  );
}

export default ConfirmModal;
