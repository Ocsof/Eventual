import {Offcanvas, Stack} from "react-bootstrap";
import {useShoppingCart} from "./ShoppingCartContext";
import {CartItem} from "./CartItem";
import {formatCurrency} from "../../utilities/formatCurrency";
import {useEffect, useState} from "react";
import axios from "axios";


type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart ( {isOpen}: ShoppingCartProps ) {
    const {closeCart, cartItems} = useShoppingCart()
    const [allEvents, setAllEvents] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8082/allevents")
            .then(res =>{
                setAllEvents(res.data)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item._id}{...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = allEvents.find((i: { _id: number; }) => i._id === cartItem._id)
                        return total + (item?.price || 0) * cartItem.quantity
                    }, 0))}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}