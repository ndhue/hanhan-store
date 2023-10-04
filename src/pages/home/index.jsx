import React from 'react';
import { listItem } from "../../data";
import { Product } from '../../components/Product';
import { ArrowRightIcon }  from '@heroicons/react/24/outline';
import { SliderProduct } from '../../components/SliderProduct';
export const Home = () => {

  return (
    <div className='w-10/12 mx-auto mt-24 text-gray-700'>
      {/* danh mục hot */}
      <div className="grid grid-cols-3 md:gap-10 gap-2 mb-12 md:pt-0 pt-8">
        <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-[url('/banner.jpg')] bg-cover w-full md:h-[200px] h-[100px] bg-center">
          <button className="absolute md:bottom-[-25px] bottom-[-15px] md:right-8 right-3 w-3/4 text-red-500 transition ease-in-out font-medium rounded-full drop-shadow-md bg-white md:text-base text-[8px] md:px-5 px-2 md:py-2.5 py-1.5 text-center">
            MUA NGAY
            <ArrowRightIcon className='md:h-5 md:w-5 h-3 w-3 inline md:ml-2 text-white bg-red-500 rounded-full p-1' />
          </button>
        </div>

        <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-[url('/banner.jpg')] bg-cover w-full md:h-[200px] h-[100px] bg-center">
          <button className="absolute md:bottom-[-25px] bottom-[-15px] md:right-8 right-3 w-3/4 text-red-500 transition ease-in-out font-medium rounded-full drop-shadow-md bg-white md:text-base text-[8px] md:px-5 px-2 md:py-2.5 py-1.5 text-center">
            MUA NGAY
            <ArrowRightIcon className='md:h-5 md:w-5 h-3 w-3 inline md:ml-2 text-white bg-red-500 rounded-full p-1' />
          </button>
        </div>

        <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-[url('/banner.jpg')] bg-cover w-full md:h-[200px] h-[100px] bg-center">
          <button className="absolute md:bottom-[-25px] bottom-[-15px] md:right-8 right-3 w-3/4 text-red-500 transition ease-in-out font-medium rounded-full drop-shadow-md bg-white md:text-base text-[8px] md:px-5 px-2 md:py-2.5 py-1.5 text-center">
            MUA NGAY
            <ArrowRightIcon className='md:h-5 md:w-5 h-3 w-3 inline md:ml-2 text-white bg-red-500 rounded-full p-1' />
          </button>
        </div>

      </div>

      {/* Ưu đãi HOT */}
      <div className="sale mb-12">
      <h1 className='font-bold md:text-2xl text-xl mb-2'>Ưu đãi HOT</h1>
        <div className="product-f bg-gradient-to-b from-red-600 to-red-400 text-slate-50">
          <SliderProduct name="Sản phẩm" listProduct={listItem} />
        </div>
      </div>

      {/* sản phẩm bán chạy */}
      <div className="product-list mb-12">
        <h1 className='font-bold md:text-2xl text-xl mb-2'>Sản phẩm bán chạy</h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
          {listItem?.map(item => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
