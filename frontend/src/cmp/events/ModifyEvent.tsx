import {Button, Card} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import {EventCardProps} from "./Event";
import {redirect, useNavigate} from "react-router-dom";

export function ModifyEvent({id, title, author, category, date, description, imgUrl}:EventCardProps) {
    const navigate = useNavigate();

    const [event, setEvent] = useState({
        title: title,
        author: author,
        category: category,
        date: date,
        description: description,
        imgUrl: imgUrl
    })

    function handleSave(){
        alert("Event modified");
        console.log(event);
        navigate(0);
    }

    return (
        <Card>
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline">
                    <input style={{width: "50%"}} className="fs-2 m-1"type="text"  placeholder={event.title} value={event.title} onChange={(e) => setEvent({...event, title: e.target.value})} />
                    <input style={{width: "50%"}} className="fs-2 m-1" type="text" placeholder={event.author} value={event.author} onChange={(e) => setEvent({...event, author: e.target.value})} />
                </Card.Title>
                <Card.Text className="mt-auto" >
                    <input style={{width: "100%"}} className="fs-4 m-1" type="text" placeholder={event.category} value={event.category} onChange={(e) => setEvent({...event, category: e.target.value})} />
                    <input style={{width: "100%"}} className="fs-4 m-1" type="text" placeholder={event.description} value={event.description} onChange={(e) => setEvent({...event, description: e.target.value})} />
                    <input className="m-1" type="date" value={event.date} onChange={(e) => setEvent({...event, date: e.target.value})} />
                </Card.Text>
                <Card.Footer >
                    <Button style={{marginLeft: "90%"}} className="btn btn-success" onClick={handleSave}>Save</Button>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}