import {Button, Card} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import {EventCardProps} from "./Event";
import {useNavigate} from "react-router-dom";
import { NotificationManager } from "react-notifications";
import {dateStringFormatter, imgForCategoryFormatter} from "../../utilities/validator";
import axios from "axios";

export function EditEvent({_id, title, author, category, date, description, price}:EventCardProps) {
    const navigate = useNavigate();

    const [event, setEvent] = useState({
        _id: _id,
        title: title,
        author: author,
        category: category,
        date: date,
        description: description,
        price: price
    })

    function handleSave(){
        axios.put("http://localhost:8082/events/" + _id, event)
            .then(res =>{
                NotificationManager.success("Event modified: " + _id);
            })
            .catch(error => console.error(error))
        navigate(0)
    }

    return (
        <Card>
            <Card.Img
                variant="top"
                src={imgForCategoryFormatter(category)}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Title>
                <h3 hidden={true}>{event.title}</h3>
            </Card.Title>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline">
                    <input style={{width: "50%"}} className="fs-2 m-1" type="text"  placeholder={event.title} value={event.title} onChange={(e) => setEvent({...event, title: e.target.value})} />
                    <input style={{width: "50%"}} className="fs-2 m-1" type="text" placeholder={event.author} value={event.author} onChange={(e) => setEvent({...event, author: e.target.value})} />
                </Card.Title>
                <Card.Text className="mt-auto" >
                    <input style={{width: "100%"}} className="fs-4 m-1" type="text" placeholder={event.category} value={event.category} onChange={(e) => setEvent({...event, category: e.target.value})} />
                    <input style={{width: "100%"}} className="fs-4 m-1" type="text" placeholder={event.description} value={event.description} onChange={(e) => setEvent({...event, description: e.target.value})} />
                    <input className="m-1" type="date" value={dateStringFormatter(event.date)} onChange={(e) => setEvent({...event, date: e.target.value})} />
                    <input className="m-1" type="number" value={Number(event.price)} onChange={(e) => setEvent({...event, price: Number(e.target.value)})} />
                </Card.Text>
                <Card.Footer >
                    <Button style={{marginLeft: "90%"}} className="btn btn-success" onClick={handleSave}>Save</Button>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}