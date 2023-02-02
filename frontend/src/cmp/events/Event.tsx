import {Card} from "react-bootstrap";
import * as React from "react";
import {formatCurrency} from "../../utilities/formatCurrency";
import {useEffect, useState} from "react";
import axios from "axios";
import {dateStringFormatter, imgForCategoryFormatter} from "../../utilities/validator";

export type EventCardProps = {
    _id: number,
    title: string,
    author: string,
    category: string,
    date: string,
    description: string,
    price: number
}

export function Event({_id, title, author, category, date, description, price}:EventCardProps){
    const [authorName, setAuthorName] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8082/user/'+ author)
            .then(res =>{
                setAuthorName(res.data.name)
            })
            .catch(error => console.error(error))
    })

    return (
        <Card key={_id}>
            <Card.Img
                variant="top"
                src={imgForCategoryFormatter(category)}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
                    <span className="fs-2">{title}</span>
                    <span className="ms-2 text-muted">{authorName}</span>
                </Card.Title>
                <Card.Text className="mt-auto">
                    <span className="fs-2">{category}</span>
                    <br/>
                    <span className="fs-2">{description}</span>
                    <br/>
                    <input type="date" value={dateStringFormatter(date)} disabled={true}/>
                    <span className="fs-2">{formatCurrency(price)}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}