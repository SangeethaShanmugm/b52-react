import { useParams } from "react-router-dom";

export function ProductDetails({ productList }) {
  const { productid } = useParams(); //get parameters from URL
  console.log(productid);
  console.log(productList[productid])
  const product = productList[productid]
  console.log(product.name)
  return (
    <h1>Product Detail Page - {product.name}</h1>
  );
}
