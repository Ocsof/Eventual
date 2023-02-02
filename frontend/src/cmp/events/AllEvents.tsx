import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// @ts-ignore
import events from "../../data/events_organized.json"
import {Button} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {NotificationManager} from "react-notifications";
import {EditEvent} from "./EditEvent";
import {Event, EventCardProps} from "./Event";

export function AllEvents() {
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
            <Container className="m-auto mb-2">
                <Row md={2} xs={1} lg={3} className="g-3">
                    /* todo change events with all events from db */
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
                        <div className="align-items-center editing-buttons">
                            {/*todo in the database*/}
                            <Button className="btn btn-warning mx-1" onClick={() => modifyEvent(item._id)}><i className="fa-solid fa-pen-to-square" /></Button>
                            <Button className="btn btn-danger mx-1" onClick={() => deleteEvent(item._id)}><i className="fa-solid fa-trash" /></Button>
                        </div>
                    </Col>
                    ))}
                </Row>
            </Container>
        </> ) : (
            <>
                <h1>Modify Event: {eventToModify}</h1>
                <Container className="m-auto mb-2">
                    <EditEvent {...events.find((e: EventCardProps)=> e._id === eventToModify)}/>
                </Container>
            </>
            )
);
}