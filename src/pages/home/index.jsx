import React from 'react';
import { listItem } from "../../data";
import { Product } from '../../components/Product';

export const Home = () => {

  return (
    <div className='w-10/12 mx-auto mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
      {listItem?.map(item => (
        <Product item={item} key={item.id}/>
      ))}
    </div>
  )
}
