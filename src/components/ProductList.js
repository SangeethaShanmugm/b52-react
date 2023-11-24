import { useState } from 'react';
import { INITIAL_PRODUCT_LIST } from '../App';
import { Product } from './Product';
import { Button, TextField } from '@mui/material';
// import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


export function ProductList({ productList, setProductList }) {
  // const productList = INITIAL_PRODUCT_LIST;


  return (
    <div>

      <div className='product-list'>
        {productList.map((pd, index) => (
          <Product key={index} product={pd} id={index} deleteButton={
            <IconButton aria-label="deletebtn" color="error" onClick={() => {
              let copyProductList = [...productList]
              let removedProduct = copyProductList.splice(index, 1)
              console.log("removedProduct", removedProduct, "index", index)
              console.log(copyProductList)
              setProductList(copyProductList)
            }} >
              <DeleteIcon />
            </IconButton>
          } />
        ))}
      </div>

    </div>

  );
}

