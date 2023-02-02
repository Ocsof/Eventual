import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {StoreItem} from "../cmp/events/StoreItem"
import {useEffect, useState} from "react";
import axios from "axios";

export function Store() {
    const [allEvents, setAllEvents] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8082/allevents")
            .then(res =>{
                setAllEvents(res.data)
            })
            .catch(error => console.error(error))
    }, [allEvents])

    return (
        <>
            <h1>Events Store</h1>
            <Container>
                <Row md={2} xs={1} lg={3} className="g-3">
                    {allEvents.map((item: JSX.IntrinsicAttributes & {
                        _id: number,
                        title: string,
                        author: string,
                        category: string,
                        date: string,
                        description: string,
                        price: number,
                        imgUrl: string
                    }) => (
                    <Col key={item._id}>
                        <StoreItem {...item}/>
                    </Col>
                    ))}
                </Row>
            </Container>
        </>
);
}