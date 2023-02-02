import {Button, Card} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import {imgForCategoryFormatter} from "../../utilities/validator";

export function NewEvent() {
    const navigate = useNavigate();

    const [event, setEvent] = useState({
        id: -1,
        title: '',
        author: JSON.parse(localStorage.getItem('user'))._id.toString(),
        category: '',
        date: '',
        description: '',
    })

    function handleSave(){
        /*todo post in the database*/
        axios.post("http://localhost:8082/events", event)
            .then(res =>{
                console.log(res.data);
                NotificationManager.success("Event added: " + res.data._id);
            })
            .catch(error => console.error(error))
        navigate("/events");
    }

    return (
        <Card className="m-4 h-100 w-75">
            <Card.Img
                variant="top"
                src={imgForCategoryFormatter(event.category)}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Title>
                <h3>New Event</h3>
            </Card.Title>
            <Card.Body className="d-flex flex-column">
                <label className="form-label" htmlFor="newEventImg">Event image: </label>
                <input style={{width: "100%"}} type="file" className="form-control" id="newEventImg" />
                <label className="form-label" htmlFor="newEventTitle">title: </label>
                <input style={{width: "100%"}} type="text" className="form-control" id="newEventTitle" onChange={(e) => setEvent({...event, title: e.target.value})}/>
                <label className="form-label" htmlFor="newEventAuthor">author: </label>
                <input style={{width: "100%"}} type="text" className="form-control" id="newEventAuthor" onChange={(e) => setEvent({...event, author: e.target.value})}/>
                <label className="form-label" htmlFor="newEventCategory">category: </label>
                <input style={{width: "100%"}} type="text" className="form-control" id="newEventCategory" onChange={(e) => setEvent({...event, category: e.target.value})}/>
                <label className="form-label" htmlFor="newEventDate">date: </label>
                <input style={{width: "100%"}} type="date" className="form-control" id="newEventDate" onChange={(e) => setEvent({...event, date: e.target.value})}/>
                <label className="form-label" htmlFor="newEventDesc">description: </label>
                <input style={{width: "100%"}} type="text" className="form-control" id="newEventDesc" onChange={(e) => setEvent({...event, description: e.target.value})}/>

                <Card.Footer >
                    <Button style={{marginLeft: "90%"}} className="btn btn-success" onClick={handleSave}>Save</Button>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}