import './App.css';
import { AddColor } from './AddColor';

const INITIAL_PRODUCT_LIST = [
  {
    name: "iPhone 13 (128GB)",
    poster: "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY327_FMwebp_QL65_.jpg",
    price: "51,499",
    rating: 4.5,
    summary: "15 cm (6.1-inch) Super Retina XDR display. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos"
  },
  {
    name: "iPhone 13 (128GB)",
    poster: "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY327_FMwebp_QL65_.jpg",
    price: "51,499",
    rating: 4.5,
    summary: "15 cm (6.1-inch) Super Retina XDR display. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos"
  }
  ,
  {
    name: "iPhone 13 (128GB)",
    poster: "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY327_FMwebp_QL65_.jpg",
    price: "51,499",
    rating: 4.5,
    summary: "15 cm (6.1-inch) Super Retina XDR display. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos"
  },
  {
    name: "iPhone 13 (128GB)",
    poster: "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY327_FMwebp_QL65_.jpg",
    price: "51,499",
    rating: 4.5,
    summary: "15 cm (6.1-inch) Super Retina XDR display. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos"
  }
]

function App() {
  const productList = INITIAL_PRODUCT_LIST
  return (
    <div className="App">
      {/* <AddColor /> */}
      <div className='product-list'>
        {productList.map((pd) => (
          <Product product={pd} />
        ))}
      </div>



    </div>
  );

}



function Product({ product }) {

  // const product = {
  //   name: "iPhone 13 (128GB)",
  //   poster: "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY327_FMwebp_QL65_.jpg",
  //   price: "51,499",
  //   rating: 4.5,
  //   summary: "15 cm (6.1-inch) Super Retina XDR display. Cinematic mode adds shallow depth of field and shifts focus automatically in your videos"
  // }

  // console.log(product.name, product.poster)
  return (
    <div className="product-container">
      <img className='product-poster' src={product.poster} alt={product.name} />
      <div className='product-spec'>
        <h2 className='product-name'>{product.name}</h2>
        <p className='product-rating'>⭐{product.rating}</p>
      </div>
      <h3 className='product-price'>Price:  ₹ {product.price}</h3>
      <p className='product-summary'>{product.summary}</p>
    </div>
  )

}

export default App;
