import { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { MinusIcon, PlusIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { GiftIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, remove, updateItemQuantity } from "../controller/cartSlice";
import { Link } from 'react-router-dom';

export const Product = (props) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [quantity, setQuantity] = useState(1);

  const addToCart = (item) => {
    dispatch(updateItemQuantity({ item, quantity }))
    setQuantity(1);
    setOpen(false);
  }

  const item = props.item;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.carts);

  // delete item
  const deletes = (id) => {
    dispatch(remove(id))
  }

  // increment item
  const increment = (e) => {
    dispatch(addItem(e))
  }

  // descriment item
  const decrement = (item) => {
    dispatch(removeItem(item))
  }

  const [price, setPrice] = useState();
  useEffect(() => {
    const totals = () => {
      let price = item.price * quantity;
      setPrice(price);
    }
    totals();
  }, [item, quantity]);

  return (
    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow text-gray-900">
      {item.note && <p className="absolute top-[-1px] left-[-1px] text-slate-50 bg-red-600 py-1 px-2 text-xs font-semibold rounded-br-md rounded-tl-md">
        {item.note}
      </p>}
      <HeartIcon className='absolute top-[10px] right-[10px] md:w-8 w-6 md:h-8 h-6 px-1 text-gray-500 bg-gray-300/80 rounded-full' />
      <GiftIcon className='absolute md:top-[50px] top-[40px] right-[10px] md:w-8 w-6 md:h-8 h-6 px-1 text-violet-700/80 bg-violet-700/20 rounded-full' />
      <Link to={`/details/${item.id}`}>
        <img className="sm:p-4 p-2 rounded-t-lg" src="/haohao.png" alt="product image" />
      </Link>
      <div className="sm:px-4 px-2 md:pb-5 pb-2">
        <Link to="/">
          <p className="md:text-lg text-md font-semibold text-gray-700 ">{item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}</p>
        </Link>
        <div className="price flex justify-between">
          <p className="md:text-xl text-base tracking-wide font-semibold text-red-600">{item.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}<span className='ml-0.5'>đ</span></p>
          {item.priceCurr != 0 && <p className="md:text-base text-sm tracking-wide font-semibold text-gray-400 line-through">{item.priceCurr.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}<span className='ml-0.5'>đ</span></p>}
        </div>
        <div className="flex items-center justify-center">
          {(cart.filter(p => p.id === item.id).length == 0) &&
            <button onClick={() => {
              handleClickOpen()
            }} className="w-3/4 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 transition ease-in-out font-medium rounded-full md:text-sm text-[12px] text-center py-1.5 mt-2">Thêm vào giỏ</button>}
          {cart.filter(p => p.id === item.id).map(p => (
            <div className="flex justify-center items-center mt-2" key={p.id}>
              <button className="border border-slate-400 rounded-full hover:bg-slate-100 duration-200" onClick={p.qty <= 1 ? () => deletes(p.id) : () => decrement(p)}>
                <MinusIcon className="h-3 w-3 inline my-1 mx-1.5" />
              </button>
              <span className="md:mx-6 mx-2 text-center text-sm md:text-base font-bold text-red-600 bg-rose-100 rounded-full md:px-6 px-4 md:py-1 py-0.5"> {p.qty} </span>
              <button className="border border-gray-200 rounded-full bg-slate-300 hover:bg-slate-400 duration-200" onClick={() => increment(p)}>
                <PlusIcon className="h-3 w-3 inline my-1 mx-1.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogActions id="alert-dialog-title">
            <button onClick={handleClose} className="px-2 text-center hover:text-red-900 duration-200">x</button>
          </DialogActions>
          <DialogContent>
            <img className="w-56 mx-auto" src="/haohao.png" alt="product image" />
            <p className="text-center text-lg font-semibold text-gray-700 ">{item.name.length > 20 ? item.name.slice(0, 20) + '...' : item.name}</p>
            <div className="price flex justify-center items-center gap-4 text-md">
              <p className="tracking-wide font-semibold text-orange-500">{item.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}<span className='ml-0.5'>đ</span></p>
              {item.priceCurr != 0 && <p className="tracking-wide font-semibold text-gray-400 line-through">{item.priceCurr.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}<span className='ml-0.5'>đ</span></p>}
            </div>
            <div className="pt-2 flex justify-between items-center">
              <div className='flex-none'>
                <button className="border border-slate-400 rounded-full hover:bg-slate-100 duration-200" onClick={() => (quantity == 1 ? setQuantity(1) : setQuantity(quantity - 1))}>
                  <MinusIcon className="h-3 w-3 inline my-1 mx-1.5" />
                </button>
                <span className="mx-2 text-center text-sm font-bold text-red-600 bg-gray-100 rounded-full md:px-4 px-2 py-1"> {quantity} </span>
                <button className="border border-gray-200 rounded-full bg-slate-300 hover:bg-slate-400 duration-200" onClick={() => setQuantity(quantity + 1)}>
                  <PlusIcon className="h-3 w-3 inline my-1 mx-1.5" />
                </button>
              </div>
              <button className="flex-1 w-56 ml-2 btn bg-orange-600 border border-none text-slate-50 py-1 rounded-lg hover:bg-orange-700 ease-in-out duration-300 font-semibold"
                onClick={() => addToCart(item)}
              >
                <p className='md:text-md text-sm font-bold mb-[-5px]'>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</p>
                <ShoppingCartIcon className="md:h-6 h-4 md:w-6 w-4 inline md:pr-2 pr-1" />
                <span className='text-sm'>Thêm vào giỏ hàng</span>
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}