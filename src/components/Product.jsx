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
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow text-gray-900">
          <a href="#">
            <img className="p-8 rounded-t-lg" src="/haohao.png" alt="product image" />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <p className="text-lg font-semibold text-gray-800 ">{item.name}</p>
            </a>
            <div className="">
              <p className="text-2xl tracking-wide font-bold text-rose-600">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</p>
              {(cart.filter(p => p.id === item.id).length ==0) && 
                <button onClick={() => addToCart(item)} className="w-full text-white bg-rose-600 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 transition ease-in-out font-medium rounded-full text-sm px-5 py-2.5 text-center">Thêm vào giỏ</button>}
                {cart.filter(p => p.id === item.id).map(p => (
                  <div className="flex justify-center items-center" key={p.id}>
                    <button className="border border-slate-400 rounded-full hover:bg-slate-100 duration-200" onClick={p.qty <= 1 ? () => deletes(p.id) : () => decrement(p)}>
                      <MinusIcon className="h-3 w-3 inline m-2" />
                    </button>
                    <span className="mx-6 text-center font-bold text-rose-600 bg-rose-100 rounded-full px-6 py-1"> {p.qty} </span>
                    <button className="border border-gray-200 rounded-full bg-slate-400 hover:bg-slate-500 duration-200" onClick={() => increment(p)}>
                      <PlusIcon className="h-3 w-3 inline m-2 text-slate-700" />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
  )
}