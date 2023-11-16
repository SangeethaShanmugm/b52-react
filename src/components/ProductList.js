import { useState } from 'react';
import { INITIAL_PRODUCT_LIST } from '../App';
import { Product } from './Product';

export function ProductList() {
  // const productList = INITIAL_PRODUCT_LIST;

  const [productList, setProductList] = useState(INITIAL_PRODUCT_LIST)

  const [name, setName] = useState("")
  const [poster, setPoster] = useState("")
  const [rating, setRating] = useState("")
  const [price, setPrice] = useState("")
  const [summary, setSummary] = useState("")

  return (
    <div>
      <div className="add-product-form">
        <input type="text" value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter the name" />

        <input type="text" value={poster}
          onChange={(event) => setPoster(event.target.value)}
          placeholder="Enter the poster" />

        <input type="text" value={rating}
          onChange={(event) => setRating(event.target.value)}
          placeholder="Enter the rating" />

        <input type="text" value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="Enter the price" />

        <input type="text" value={summary}
          onChange={(event) => setSummary(event.target.value)}
          placeholder="Enter the summary" />
        {/* copy the productList and add newProduct to it */}
        <button onClick={() => {
          const newProduct = {
            name: name,
            poster: poster,
            price: price,
            rating: rating,
            summary: summary
          }
          setProductList([...productList, newProduct]);
          console.log("newProduct =>",newProduct)
        }

        }>Add Product</button>


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

