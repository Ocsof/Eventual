import * as React from 'react'
import {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Event} from "./Event";
import axios from "axios";
import {Button} from "react-bootstrap";
import {NotificationManager} from "react-notifications";

export function MyEvents() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8082/myinscriptions/" + JSON.parse(localStorage.getItem('user'))._id)
            .then(res =>{
                setEvents(res.data)
            })
            .catch(error => console.error(error))
    }, [events])

    function deleteEvent(id){
        alert("Are you sure you wanna unregister from this event? (You can ask a refund)")

        const user =  JSON.parse(localStorage.getItem('user'))
        user.inscriptions = user.inscriptions.filter(element => element !== id)
        console.log(user.inscriptions)

        axios.put('http://localhost:8082/user/'+ user._id, user)
            .then(response => {
                console.log(response.data);
                if(response.status === 200){
                    console.log(response.data)
                    localStorage.setItem('user', JSON.stringify(user))
                    NotificationManager.warning("Unregistered!")
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <h3><strong>{JSON.parse(localStorage.getItem('user')).name}</strong>'s tickets: </h3>
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
                        <div className="align-items-center editing-buttons">
                            <Button className="btn btn-danger mx-1" onClick={(e) => {e.preventDefault(); deleteEvent(item._id)}}><i className="fa-solid fa-trash" /></Button>
                        </div>
                    </Col>
                    ))}
                </Row>
            </Container>
        </>
);
}