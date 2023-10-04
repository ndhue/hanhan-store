import React, { useState } from "react"
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { ChevronRightIcon, MinusIcon, PlusIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import { addItem, removeItem, remove, updateItemQuantity } from "../controller/cartSlice";
import { listItem } from "../data";
export const Details = () => {
  const { id } = useParams()

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1)
  const addToCart = (item) => {
    dispatch(updateItemQuantity({ item, quantity }))
    setQuantity(1)
  }

  return (
    <>
      {listItem?.filter(item => item.id == id)
        .map(item => (
          <div className="w-10/12 mx-auto mt-28 text-gray-700" key={item.id}>
            <div className="content grid grid-cols-1 md:grid-cols-2 md:gap-10">
              <div className="left md:col-span-1 col-span-2 items-center">
                <img src="/haohao.png" alt={item.name} className='w-full' />
              </div>
              <div className="right md:col-span-1 col-span-2 pt-2">
                <h1 className='md:text-2xl text-4xl w-full md:w-1/2 font-bold py-2'>{item.name}</h1>
                <p className="md:text-xl text-2xl tracking-wide font-semibold text-orange-500">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</p>
                {item.priceCurr != 0 && <p className="sm:text-xl text-md tracking-wide font-semibold text-gray-400 line-through">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.priceCurr)}</p>}
                <div className="qty py-2 md:py-4 flex justify-start gap-6 items-center">
                  <div className="mr-4 font-bold text-slate-500">Số lượng </div>
                  <div>
                    <button className="border border-slate-400 rounded-full hover:bg-slate-100 duration-200" onClick={() => (quantity == 1 ? setQuantity(1) : setQuantity(quantity - 1))}>
                      <MinusIcon className="h-4 w-4 inline mx-2 my-1" />
                    </button>
                    <span className="sm:mx-6 mx-2 text-center text-sm sm:text-base font-bold text-gray-600 bg-gray-100 rounded-full sm:px-6 px-4 sm:py-1 py-1"> {quantity} </span>
                    <button className="border border-gray-200 rounded-full bg-slate-300 hover:bg-slate-400 duration-200" onClick={() => setQuantity(quantity + 1)}>
                      <PlusIcon className="h-4 w-4 inline mx-2 my-1" />
                    </button>
                  </div>
                </div>
                <div className="action pt-2 flex justify-start gap-6 items-center">
                  <button className="btn bg-orange-600 border border-none text-slate-50 px-6 py-2 rounded-lg hover:bg-orange-700 ease-in-out duration-300 font-semibold sm:block hidden"
                    onClick={() => addToCart(item)}
                  >
                    <ShoppingCartIcon className="h-8 w-8 inline pr-2" />
                    Thêm vào giỏ hàng
                  </button>
                </div>
                <div className="describe pt-6">
                  <p>These brand-new, festive mini vanilla and chocolate cupcakes are
                    topped with classic Holiday candies: red & green M&Ms, Sno-Caps
                    and crushed Peppermint. Bring a 24- or 36-pack for the perfect 2022
                    winter party dessert!</p>
                  <p>Made in a facility that processes eggs, milk, peanuts,
                    tree nuts, soy, and wheat. Contains: Milk, Eggs, Wheat, Soy</p>
                </div>
              </div>
            </div>
            <div className="add sm:hidden fixed bottom-0 left-0 bg-white w-full p-2">
              <button className="btn bg-orange-600 border border-none text-slate-50 px-6 py-2 rounded-lg hover:bg-orange-700 ease-in-out duration-300 font-semibold w-full"
                onClick={() => addToCart(item)}
              >
                <ShoppingCartIcon className="h-8 w-8 inline pr-2" />
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        ))
      }
    </>
  )
}
