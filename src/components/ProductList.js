import { useState } from 'react';
import { INITIAL_PRODUCT_LIST } from '../App';
import { Product } from './Product';
import { Button, TextField } from '@mui/material';
// import TextField from '@mui/material/TextField';


export function ProductList({ productList }) {
  // const productList = INITIAL_PRODUCT_LIST;


  return (
    <div>

      <div className='product-list'>
        {productList.map((pd, index) => (
          <Product key={index} product={pd} id={index} />
        ))}
      </div>

    </div>

  );
}

