import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// @ts-ignore
import events from "../../data/events.json"
import {Event} from "./Event";

export function MyEvents() {
    return (
        <>
            <h3>Events {JSON.parse(localStorage.getItem('user')).name} participates: </h3>
            <Container className="m-auto">
                <Row md={2} xs={1} lg={3} className="g-3">
                    {events.map((item: JSX.IntrinsicAttributes & {
                        id: number,
                        title: string,
                        author: string,
                        category: string,
                        date: string,
                        description: string,
                        price: number,
                        imgUrl: string
                    }) => (
                    <Col key={item.id}>
                        <Event {...item}/>
                    </Col>
                    ))}
                </Row>
            </Container>
        </>
);
}