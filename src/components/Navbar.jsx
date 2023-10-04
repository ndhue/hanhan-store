import { ShoppingCartIcon} from "@heroicons/react/24/outline";
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';

import { remove } from "../controller/cartSlice";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cartReducer.carts);
  // delete item
  const deletes = (id) => {
    dispatch(remove(id))
  }

  // total prcie
  const [price, setPrice] = useState();
  useEffect(() => {
    const totals = () => {
      let price = 0
      cart.forEach((e, i) => {
        price = parseFloat(e.price) * e.qty + price
      })
      setPrice(price)
    }
    totals();
  }, [cart]);

  return (

    <nav className="fixed w-full top-0 bg-red-600 border-gray-200 z-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Bách Hóa Hân Hân</span>
        </a>
        <div className="sm:pt-0 pt-2 flex md:order-2 items-center">
          <div className="flex-auto w-90 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-3 h-3 text-grey" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full py-2 px-10 mr-16 text-[12px] text-slate-700 border border-gray-300 rounded-full bg-gray-50" placeholder="Xin chào, bạn muốn tìm gì hôm nay?" />
          </div>
          <button className="flex-auto w-12 ml-auto cart relative" onClick={() => setOpen(true)}>
            <ShoppingCartIcon className="ml-2 w-8 h-8 text-white" />
            {cart.length !== 0 && (
              <span className="absolute right-0 top-0 rounded-full bg-white border-red-700 border-2 w-5 h-5 p-0 m-[-2px] text-red-600 font-bold text-[10px] leading-5 text-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>
      {/* CART */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">Giỏ hàng của bạn ({cart.length})</Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              {cart.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src="/haohao.png"
                                      alt="png"
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href="#">{product.name}</a>
                                        </h3>
                                        <p className="ml-4">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">Số lượng: {product.qty}</p>

                                      <div className="flex">
                                        <button className="hover:text-red-900 duration-200 text-red-700" onClick={() => { deletes(product.id) }}>
                                          <TrashIcon className="h-6 w-6" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Tổng</p>
                          <p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</p>
                        </div>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-full border border-transparent bg-rose-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-rose-700"
                          >
                            Thanh toán
                          </a>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </nav>
  );
}