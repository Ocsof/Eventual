import {Offcanvas, Stack} from "react-bootstrap";
import {useShoppingCart} from "./ShoppingCartContext";
import {CartItem} from "./CartItem";
import {formatCurrency} from "../../utilities/formatCurrency";
import {useEffect, useState} from "react";
import axios from "axios";
import {NotificationManager} from "react-notifications";


type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart ( {isOpen}: ShoppingCartProps ) {
    const {closeCart, cartItems, clearCart} = useShoppingCart()
    const [allEvents, setAllEvents] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8082/allevents")
            .then(res =>{
                setAllEvents(res.data)
            })
            .catch(error => console.error(error))
    }, [])

    function handleInscription(){
        alert("Confirm your payment")
        // my_iscription array updating and reposting
        const user =  JSON.parse(localStorage.getItem('user'))
        const my_inscriptions = user.inscriptions

        cartItems.forEach( event => {
            my_inscriptions.push(event._id)
            //users array of each event updating and reposting
            axios.get('http://localhost:8082/events/' + event._id)
                .then(response => {
                    const event = response.data
                    event.users.push(user._id)
                    axios.put('http://localhost:8082/events/' + event._id, event)
                        .then(res => {
                            console.log(res)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
                .catch(error => {
                    console.log(error)
                })
        })

        user.inscriptions = my_inscriptions
        axios.put('http://localhost:8082/user/'+ user._id, user)
            .then(response => {
                console.log(response.data);
                if(response.status === 200){
                    console.log(response.data)
                    localStorage.setItem('user', JSON.stringify(user))
                }
            })
            .catch(error => {
                console.log(error)
            })

        // restore cart after payments
        clearCart()
        NotificationManager.success("Payment confirmed!")
    }

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
                    <div className="btn btn-success btn-lg btn-block" onClick={handleInscription}>Proceed to payment</div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}