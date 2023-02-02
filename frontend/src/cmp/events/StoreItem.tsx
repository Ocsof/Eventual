import * as React from "react";
import {Button, Card} from "react-bootstrap";
import {formatCurrency} from "../../utilities/formatCurrency";
import {useShoppingCart} from "./ShoppingCartContext";
import {dateStringFormatter, imgForCategoryFormatter} from "../../utilities/validator";
import {useEffect, useState} from "react";
import axios from "axios";

type StoreItemProps = {
    _id: number,
    title: string,
    author: string,
    category: string,
    date: string,
    description: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ _id, title, author, category, date, description, price, imgUrl} : StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()
    const quantity = getItemQuantity(_id)
    const [authorName, setAuthorName] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8082/user/'+ author)
            .then(res =>{
                setAuthorName(res.data.name)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <Card className="m-2" >
            <Card.Img
                variant="top"
                src={imgForCategoryFormatter(category)}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
                    <span className="fs-2">{title}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <Card.Text className="justify-content-between">
                    <span className="small">{authorName}</span>
                    <br/>
                    <span className="small">{category}</span>
                    <br/>
                    <span className="small">{description}</span>
                    <br />
                    <input type="date" value={dateStringFormatter(date)} disabled={true} />
                </Card.Text>
                <div className="mt-auto">
                    {
                        quantity === 0 ? (
                            <Button className="w-100" onClick={() => increaseCartQuantity(_id)}>+ Add To Cart</Button>
                        ) : (
                            <div
                              className="d-flex align-items-center flex-column"
                              style={{gap: ".5rem"}}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{gap: ".5rem"}}
                                >
                                    <Button onClick={() => decreaseCartQuantity(_id)}>-</Button>
                                    <div>
                                        <span className="fs-3">{quantity}</span> in cart
                                    </div>
                                    <Button onClick={() => increaseCartQuantity(_id)}>+</Button>
                                </div>
                                <Button variant="danger" size="sm" onClick={() => removeFromCart(_id)}>Remove</Button>
                            </div>
                        )
                    }
                </div>
            </Card.Body>
        </Card>
    )
}
