import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {NotificationManager} from "react-notifications";
import {EditEvent} from "./EditEvent";
import {Event, EventCardProps} from "./Event";
import axios from "axios";

export function AllEvents() {
    const [eventToModify, setEventToModify] = useState(-1);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/allevents')
            .then(res =>{
                setEvents(res.data)
            })
            .catch(error => console.error(error))
    }, [events])

    function modifyEvent(id: number){
        setEventToModify(id);
    }

    function deleteEvent(_id){
        axios.delete('http://localhost:8082/events/' + _id)
            .then(res =>{
                console.log(res.data)
                // setEvents(res.data)
            })
            .catch(error => console.error(error))
        NotificationManager.success("Event deleted: " + _id);
        axios.get('http://localhost:8082/allevents')
            .then(res =>{
                setEvents(res.data)
            })
            .catch(error => console.error(error))
    }

    return (
        eventToModify === -1 ? (
        <>
            <Container className="m-auto mb-2">
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
                        <div className="align-items-center editing-buttons">
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