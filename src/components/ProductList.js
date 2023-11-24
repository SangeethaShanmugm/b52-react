import { useEffect, useState } from 'react';
import { INITIAL_PRODUCT_LIST } from '../App';
import { Product } from './Product';
import { Button, TextField } from '@mui/material';
// import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


export function ProductList() {
  // const productList = INITIAL_PRODUCT_LIST;
  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetch("https://6541cd35f0b8287df1fee5de.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => setProductList(data))
  }, [])//call only once

  return (
    <div>

      <div className='product-list'>
        {productList.map((pd, index) => (
          <Product key={index} product={pd} id={pd.id} deleteButton={
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

