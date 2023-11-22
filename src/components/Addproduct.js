import { useState } from "react"
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom"

export function AddProduct({ productList, setProductList }) {

    const [name, setName] = useState("")
    const [poster, setPoster] = useState("")
    const [rating, setRating] = useState("")
    const [price, setPrice] = useState("")
    const [summary, setSummary] = useState("")

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
                navigate("/products")
            }

            }>Add Product</Button>


        </div>
    )
}

//Task =  15 mins
// Add Products
// 5  input fields
//(poster, name, price, rating, summary )
// Add product button
