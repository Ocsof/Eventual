import {Event} from "./Event";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";


export function SearchEvents(){
    const[events, setEvents] = useState([])
    const category = localStorage.getItem('category')

    useEffect(() => {
        axios.get("http://localhost:8082/categories/" + category)
            .then(res =>{
                console.log(res.data)
                setEvents(res.data)
            })
            .catch(error => console.error(error))
    }, [events])

    return(
            <>
                <h3>Results of research: {category}</h3>
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