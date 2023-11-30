import { useSelector, useDispatch } from "react-redux"
import { CartItem } from "./CartItem"
import { Button } from "@mui/material"
import { clearCart } from "../utils/CartSlice"

export function Cart() {
    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.cart.items)
    console.log("cartItems", cartItems)

    const handleClearItem = () => {
        dispatch(clearCart())
    }

    return (
        <>
            Cart {cartItems.length} Items Added Successfully
            <Button onClick={() => handleClearItem()}>Clear Cart</Button>
            {cartItems.map((item) => (
                <CartItem product={item} />
            ))}
        </>
    )
}