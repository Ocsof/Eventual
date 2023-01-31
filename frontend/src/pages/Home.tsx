import {useEffect, useState} from "react";
import axios from 'axios';
import {Event} from "../cmp/events/Event";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import * as React from "react";

export function Home(){
    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8082/events")
            .then(res =>{
                setEvents(res.data)
            })
            .catch(error => console.error(error))
    }, [])

    return(
            <>
                <h3>Top 10 Events</h3>
                <Container className="m-2">
                    <Row md={2} xs={1} lg={3} className="g-3">
                        {events.map((event: JSX.IntrinsicAttributes & {
                            _id: number,
                            title: string,
                            author: string,
                            category: string,
                            date: string,
                            description: string,
                            price: number
                        }) => (
                            <Col key={event._id}>
                                <Event {...event}/>
                            </Col>
                        ))
                        }
                    </Row>
                </Container>
            </>
    )
}