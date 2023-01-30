import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// @ts-ignore
import events from "../../data/events_organized.json"
import {Event, EventCardProps} from "./Event";
import {Button} from "react-bootstrap";
import {EditEvent} from "./EditEvent";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {NotificationManager} from "react-notifications";

export function MyOrganizedEvents() {
    const [eventToModify, setEventToModify] = useState(-1);
    const navigate = useNavigate();

    function modifyEvent(id: number){
        setEventToModify(id);
    }

    function deleteEvent(e: any){
        /* TODO: delete in the database */
        let newEvents = events.filter((event: { id: any }) => event.id !== e);
        console.log(newEvents)
        NotificationManager.success("Event deleted: " + e);
    }

    return (
        eventToModify === -1 ? (
        <>
            <div className="align-items-center d-flex">
                <h3>Events {localStorage.getItem('username')} organizes: </h3>
                <br />
                <Button className="btn btn-secondary btn-outline-dark mx-4" id="newEvent" onClick={() => navigate("/new_event")}>
                    <i className="fa-solid fa-square-plus" />
                </Button>
            </div>
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
        </> ) : (
            <>
                <h1>Modify Event: {eventToModify}</h1>
                <Container className="m-auto mb-2">
                    <EditEvent {...events.find((e: EventCardProps)=> e.id === eventToModify)}/>
                </Container>
            </>
            )
);
}