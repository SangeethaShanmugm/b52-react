import { useEffect, useState } from "react"
import { Button, TextField } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom"
import { API } from "../global";
// import LoadingButton from '@mui/lab/LoadingButton';


export function EditProduct() {


  const { productid } = useParams(); //get parameters from URL
  console.log(productid);

  const [product, setProduct] = useState(null)


  useEffect(() => {
    fetch(`${API}/${productid}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [])//call only once

  console.log(product)
  return product ? <EditProductForm product={product} /> : "Loading..."
}



function EditProductForm({ product }) {

  const [name, setName] = useState(product.name)
  const [poster, setPoster] = useState(product.poster)
  const [rating, setRating] = useState(product.rating)
  const [price, setPrice] = useState(product.price)
  const [summary, setSummary] = useState(product.summary)

  const navigate = useNavigate()

  return (
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


      <Button variant="contained" color="success" onClick={() => {

        const updateProduct = {
          name: name,
          poster: poster,
          price: price,
          rating: rating,
          summary: summary
        }
        //1.method - PUT ✅
        //2.body - data - JSON
        //3.headers - JSON

        fetch(`${API}/${product.id}`, {
          method: "PUT",
          body: JSON.stringify(updateProduct),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((res) => res.json())
          .then(() => navigate("/products"))


      }}>SAVE</Button>


    </div>
  )
}