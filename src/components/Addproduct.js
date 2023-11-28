import { useState } from "react"
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom"
import { API } from "../global";
import axios from "axios";
import { useFormik } from "formik"
import * as yup from "yup"


const productValidationSchema = yup.object({
    name: yup.string()
        .required("Why not fill the name?"),
    poster: yup.string()
        .min(10, "Need a longer poster")
        .required("Why not fill the poster?"),
    rating: yup.number()
        .min(0, "Need a higher rating")
        .max(10, "Too much rating")
        .required("Why not fill the rating?"),
    price: yup.string()
        .required("Why not fill the price?"),
    summary: yup.string()
        .min(20, "Need a longer summary")
        .max(500, "Too much summary")
        .required("Why not fill the summary?")
})


export function AddProduct() {


    const formik = useFormik({
        initialValues:
            { name: "", poster: "", rating: "", price: "", summary: "" },
        validationSchema: productValidationSchema,
        onSubmit: (newProduct) => {
            console.log("onSubmit", newProduct)
            createProduct(newProduct)
        }
    })


    // const [name, setName] = useState("")
    // const [poster, setPoster] = useState("")
    // const [rating, setRating] = useState("")
    // const [price, setPrice] = useState("")
    // const [summary, setSummary] = useState("")

    const navigate = useNavigate()

    const createProduct = (newProduct) => {
        console.log("createProduct", newProduct)
        fetch(`${API}`, {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then(() => navigate("/products"))
    }

    return (
        <form className="add-product-form"
            onSubmit={formik.handleSubmit}>

            <TextField
                label="Name"
                variant="standard"
                id="name"
                name="name"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            // value={name}
            // onChange={(event) => setName(event.target.value)}
            />
            {formik.touched.name && formik.errors.name ? formik.errors.name : ""}


            <TextField
                label="Poster"
                variant="standard"
                id="poster"
                name="poster"
                value={formik.values.poster}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""}
            <TextField
                label="Rating"
                variant="standard"
                id="rating"
                name="rating"
                value={formik.values.rating}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            {formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}

            <TextField
                label="Price"
                variant="standard"
                id="price"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.price && formik.errors.price ? formik.errors.price : ""}

            <TextField
                label="Summary"
                variant="standard"
                id="summary"
                name="summary"
                value={formik.values.summary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            {formik.touched.summary && formik.errors.summary ? formik.errors.summary : ""}

            {/* copy the productList and add newProduct to it */}

            <Button variant="contained" type="submit"
                onClick={createProduct}
            >Add Product</Button>


            {/* onClick={() => {
                const newProduct = {
                    name: name,
                    poster: poster,
                    price: price,
                    rating: rating,
                    summary: summary
                }
                    1.method - POST   ✅
                    2.body - data - JSON
                    3.headers - JSON

                     axios.post(`${API}`, newProduct, {
                        headers: {
                             Accept: "application/json",
                            "Content-Type": "application/json"
                        }
                     })
                         .then((newProduct) => console.log(newProduct))
                        .catch((err) => console.log(err))
                         .then(() => navigate("/products"))

                     fetch(`${API}`, {
                         method: "POST",
                        body: JSON.stringify(newProduct),
                         headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then((res) => res.json())
                      .then(() => navigate("/products"))


                     setProductList([...productList, newProduct]);
                   console.log("newProduct =>", newProduct)
                     navigate("/products")
                 } */}




        </form >
    )
}

//Task =  15 mins
// Add Products
// 5  input fields
//(poster, name, price, rating, summary )
// Add product button
