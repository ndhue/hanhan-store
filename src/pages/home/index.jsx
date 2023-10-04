import React from 'react';
import { listItem } from "../../data";
import { Product } from '../../components/Product';
import { BottomNav } from "../../components/BottomNav";
import { ChevronLeftIcon} from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
export const Home = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchKey = searchParams.get('searchKey');
  if(searchKey) {
    return (
      <>
    <div className='w-10/12 mx-auto mt-20 text-gray-700'>
        <Link to="/" className='text-lg font-semibold hover:underline duration-200'>
          <ChevronLeftIcon className='h-5 w-5 inline mr-1' />
          Quay lại trang chủ
        </Link>
      <div className="product-list my-4">
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-6 gap-4">
          {listItem
          ?.filter((item) => item.name.toLowerCase().includes(searchKey.toLowerCase()))
          .map(item => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
    <BottomNav />
    </>
    )
  }
  return (
    <>
    <div className='w-10/12 mx-auto mt-28 text-gray-700'>
      <div className="product-list mb-12">
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-6 gap-4">
          {listItem?.map(item => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
    <BottomNav />
    </>
  )
}
