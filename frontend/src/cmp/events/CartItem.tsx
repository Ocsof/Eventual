import {useShoppingCart} from "./ShoppingCartContext";
// @ts-ignore
import storeItems from '../../data/events_onsell.json'
import {Button, Stack} from "react-bootstrap";
import {formatCurrency} from "../../utilities/formatCurrency";

type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({ id, quantity }:CartItemProps){
    const { removeFromCart } = useShoppingCart()

    const item = storeItems.find((i: { id: number; }) => i.id === id)

    if(item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{ width: "125px", height: "75px", objectFit:"cover"}} alt={"image " + id}/>
            <div className="me-auto">
                <div>
                    {item.name}
                    {quantity > 0 && <span className="text-muted" style={{fontSize: ".65rem"}}>x{quantity}</span> }
                </div>
                <div className="text-muted" style={{fontSize: ".75rem"}}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                &times;
            </Button>
        </Stack>
    )
}