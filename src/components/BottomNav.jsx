import { TicketIcon, Square3Stack3DIcon, HomeIcon, BoltIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
export const BottomNav = () => {

  return (
    <div className='fixed bottom-0 inset-x-0'>
      <div className="lg:w-5/12 w-full mx-auto grid grid-cols-5 items-center text-center bg-white text-slate-600 md:text-sm text-[12px] rounded-t-md drop-shadow-md">
        <Link to="#" className="cursor-pointer item py-2 px-0.5 hover:text-red-600 transition ease-in-out focus:text-red-600">
          <HomeIcon className="w-6 h-6 mx-auto" />
          <span>Trang chủ</span>
        </Link>
        <div className="cursor-pointer item py-2 px-0.5 hover:text-red-600 transition ease-in-out">
          <BoltIcon className="w-6 h-6 mx-auto" />
          <span>Flash sale</span>
        </div>
        <div className="cursor-pointer item py-2 px-0.5 hover:text-red-600 transition ease-in-out">
          <TicketIcon className="w-6 h-6 mx-auto" />
          <span>Mã giảm giá</span>
        </div>
        <div className="cursor-pointer item py-2 px-0.5 hover:text-red-600 transition ease-in-out">
          <Square3Stack3DIcon className="w-6 h-6 mx-auto" />
          <span>Danh mục</span>
        </div>
        <div className="cursor-pointer item py-2 px-0.5 hover:text-red-600 transition ease-in-out">
          <ShoppingBagIcon className="w-6 h-6 mx-auto" />
          <span>Thương hiệu</span>
        </div>
      </div>
    </div>
  );
}
