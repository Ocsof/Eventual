import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// @ts-ignore
import events from "../../data/events_organized.json"
import {Event} from "./Event";
import {Button, Offcanvas} from "react-bootstrap";

export function MyOrganizedEvents() {

    function modifyEvent(e: any){
        alert("modified: " + e);
    }

    function deleteEvent(e: any){
        alert("deleted: " + e);
    }

    return (
        <>
            <h1>My Organized Events</h1>
            <Container className="m-auto mb-2">
                <Row md={2} xs={1} lg={3} className="g-3">
                    {events.map((item: JSX.IntrinsicAttributes & {
                        id: number,
                        title: string,
                        author: string,
                        category: string,
                        date: string,
                        description: string,
                        imgUrl: string
                    }) => (
                    <Col key={item.id}>
                        <Event {...item}/>
                        <div className="align-items-center editing-buttons">
                            <Button className="btn btn-warning mx-1" onClick={() => modifyEvent(item.id)}><i className="fa-solid fa-pen-to-square" /></Button>
                            <Button className="btn btn-danger mx-1" onClick={() => deleteEvent(item.id)}><i className="fa-solid fa-trash" /></Button>
                        </div>
                    </Col>
                    ))}
                </Row>
            </Container>
        </>
);
}