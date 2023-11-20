import { useState } from 'react';
import { INITIAL_PRODUCT_LIST } from '../App';
import { Product } from './Product';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export function ProductList({ productList, setProductList }) {
  // const productList = INITIAL_PRODUCT_LIST;



  const [name, setName] = useState("")
  const [poster, setPoster] = useState("")
  const [rating, setRating] = useState("")
  const [price, setPrice] = useState("")
  const [summary, setSummary] = useState("")

  return (
    <div>
      <div className="add-product-form">

        <TextField label="Name" variant="standard" value={name}
          onChange={(event) => setName(event.target.value)} />

        <TextField label="Poster" variant="standard" value={poster}
          onChange={(event) => setPoster(event.target.value)} />

        <TextField label="Rating" variant="standard" value={rating}
          onChange={(event) => setRating(event.target.value)} />

        <TextField label="Price" variant="standard" value={price}
          onChange={(event) => setPrice(event.target.value)} />

        <TextField label="Summary" variant="standard" value={summary}
          onChange={(event) => setSummary(event.target.value)} />


        {/* copy the productList and add newProduct to it */}

        <Button variant="contained" onClick={() => {
          const newProduct = {
            name: name,
            poster: poster,
            price: price,
            rating: rating,
            summary: summary
          }
          setProductList([...productList, newProduct]);
          console.log("newProduct =>", newProduct)
        }

        }>Add Product</Button>


      </div>
      <div className='product-list'>
        {productList.map((pd, index) => (
          <Product key={index} product={pd} id={index} />
        ))}
      </div>

    </div>

  );
}

//Task =  15 mins
// Add Products
// 5  input fields
//(poster, name, price, rating, summary )
// Add product button

