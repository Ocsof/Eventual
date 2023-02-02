import {useShoppingCart} from "./ShoppingCartContext";
import {Button, Stack} from "react-bootstrap";
import {formatCurrency} from "../../utilities/formatCurrency";
import {useEffect, useState} from "react";
import axios from "axios";
import {imgForCategoryFormatter} from "../../utilities/validator";

type CartItemProps = {
    _id: number,
    quantity: number
}

export function CartItem({ _id, quantity }:CartItemProps){
    const { removeFromCart } = useShoppingCart()

    const [allEvents, setAllEvents] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8082/allevents")
            .then(res =>{
                setAllEvents(res.data)
            })
            .catch(error => console.error(error))
    }, [])

    const item = allEvents.find((i: { _id: number; }) => i._id === _id)

    if(item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={imgForCategoryFormatter(item.category)} style={{ width: "125px", height: "75px", objectFit:"cover"}} alt={"image " + _id}/>
            <div className="me-auto">
                <div>
                    {item.title}
                    {quantity > 0 && <span className="text-muted" style={{fontSize: ".65rem"}}>x{quantity}</span> }
                </div>
                <div className="text-muted" style={{fontSize: ".75rem"}}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item._id)}>
                &times;
            </Button>
        </Stack>
    )
}