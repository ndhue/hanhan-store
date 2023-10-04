import React from 'react'
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, remove, updateItemQuantity } from "../controller/cartSlice";

export const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.carts);
  const addToCart = (id) => {
    dispatch(addItem(id));
  }
  // delete item
  const deletes = (id) => {
    dispatch(remove(id))
  }

  // increment item
  const increment = (e) => {
    dispatch(updateItemQuantity(e))
  }

  // descriment item
  const decrement = (item) => {
    dispatch(removeItem(item))
  }

  return (
    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow text-gray-900">
      {item.note && <p className="absolute top-[-1px] left-[-1px] text-slate-50 bg-red-600 p-1 text-sm font-bold rounded-br-md rounded-tl-md">
        {item.note}
      </p>}
          <a href="#">
            <img className="sm:p-8 p-4 rounded-t-lg" src="/haohao.png" alt="product image" />
          </a>
          <div className="sm:px-5 px-2 pb-5">
            <a href="#">
              <p className="text-lg font-semibold text-gray-800 ">{item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}</p>
            </a>
            <div className="">
              <p className="sm:text-2xl text-lg tracking-wide font-bold text-red-600">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</p>
              {(cart.filter(p => p.id === item.id).length ==0) && 
                <button onClick={() => addToCart(item)} className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 transition ease-in-out font-medium rounded-full sm:text-sm text-[12px] sm:px-5 px-2 py-2.5 text-center">Thêm vào giỏ</button>}
                {cart.filter(p => p.id === item.id).map(p => (
                  <div className="flex justify-center items-center mt-2" key={p.id}>
                    <button className="border border-slate-400 rounded-full hover:bg-slate-100 duration-200" onClick={p.qty <= 1 ? () => deletes(p.id) : () => decrement(p)}>
                      <MinusIcon className="h-3 w-3 inline sn:m-2 m-1.5" />
                    </button>
                    <span className="sm:mx-6 mx-2 text-center text-sm sm:text-base font-bold text-red-600 bg-rose-100 rounded-full sm:px-6 px-4 sm:py-1 py-1"> {p.qty} </span>
                    <button className="border border-gray-200 rounded-full bg-slate-400 hover:bg-slate-500 duration-200" onClick={() => increment(p)}>
                      <PlusIcon className="h-3 w-3 inline sn:m-2 m-1.5 text-slate-700" />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
  )
}
