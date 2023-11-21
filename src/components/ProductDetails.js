import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export function ProductDetails({ productList }) {
  const { productid } = useParams(); //get parameters from URL
  console.log(productid);
  console.log(productList[productid])
  const product = productList[productid]
  console.log(product.name)

  const navigate = useNavigate()


  return (
    <div className="product-detail-container">
      <iframe width="100%" height="450" src={product.trailer} title="Introducing iPhone 15 Pro | Apple" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className='product-spec'>
        <h2 className='product-name'>{product.name}</h2>
        <p className='product-rating'>⭐{product.rating}</p>
      </div>
      <h3 className='product-price'>Price:  ₹ {product.price}</h3>
      <Button variant="contained" onClick={() => navigate(-1)} startIcon={<ArrowCircleLeftIcon />} >BACK</Button>



    </div>

  );
}
