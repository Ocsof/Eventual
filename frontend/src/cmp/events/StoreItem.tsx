import * as React from "react";
import {Button, Card} from "react-bootstrap";
import {formatCurrency} from "../../utilities/formatCurrency";
import {useShoppingCart} from "./ShoppingCartContext";

type StoreItemProps = {
    id: number,
    title: string,
    author: string,
    category: string,
    date: string,
    description: string,
    imgUrl: string,
    price: number
}

export function StoreItem({ id, title, author, category, date, description, imgUrl, price} : StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <Card className="h-100" >
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
                    <span className="fs-2">{title}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <Card.Text className="justify-content-between">
                    <span className="small">{author}</span>
                    <span className="small">{category}</span>
                    <br/>
                    <span className="small">{description}</span>
                    <input type="date" value={date} disabled={true} />
                </Card.Text>
                <div className="mt-auto">
                    {
                        quantity === 0 ? (
                            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
                        ) : (
                            <div
                              className="d-flex align-items-center flex-column"
                              style={{gap: ".5rem"}}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{gap: ".5rem"}}
                                >
                                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                    <div>
                                        <span className="fs-3">{quantity}</span> in cart
                                    </div>
                                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                                </div>
                                <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                            </div>
                        )
                    }
                </div>
            </Card.Body>
        </Card>
    )
}
