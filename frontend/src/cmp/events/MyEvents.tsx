import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Event} from "./Event";
import {useEffect, useState} from "react";
import axios from "axios";

export function MyEvents() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const myEvents = JSON.parse(localStorage.getItem('user')).inscriptions;
        myEvents.map((e)=>{
            axios.get("http://localhost:8082/events/"+e)
                .then(res =>{
                    setEvents([...events, res.data])
                })
                .catch(error => console.error(error))
        })

    })

    return (
        <>
            <h3>Events {JSON.parse(localStorage.getItem('user')).name} participates: </h3>
            <Container className="m-auto">
                <Row md={2} xs={1} lg={3} className="g-3">
                    {events.map((item: JSX.IntrinsicAttributes & {
                        _id: number,
                        title: string,
                        author: string,
                        category: string,
                        date: string,
                        description: string,
                        price: number
                    }) => (
                    <Col key={item._id}>
                        <Event {...item}/>
                    </Col>
                    ))}
                </Row>
            </Container>
        </>
);
}