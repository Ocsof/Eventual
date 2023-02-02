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
        id: '',
        title: '',
        author: '',
        category: '',
        date: '',
        description: '',
        price: ''
    })

    function handleSave(e){
        e.preventDefault()
        const user =  JSON.parse(localStorage.getItem('user'))
        const my_organizations = user.my_organizations

        axios.post("http://localhost:8082/events", event)
            .then(res =>{
                console.log(res.data);
                my_organizations.push(res.data._id)
                NotificationManager.success("Event added: " + res.data._id);
            })
            .catch(error => console.error(error))

        user.my_organizations = my_organizations
        console.log(user.my_organizations)

        axios.put('http://localhost:8082/user/'+ user._id, user)
            .then(response => {
                console.log(response.data);
                if(response.status === 200){
                    console.log(response.data)
                    localStorage.setItem('user', JSON.stringify(user))
                    navigate("/events");
                }
            })
            .catch(error => {
                console.log(error)
            })
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
                <form onSubmit={handleSave}>
                    <label className="form-label" htmlFor="newEventTitle">title: </label>
                    <input required style={{width: "100%"}} type="text" className="form-control" id="newEventTitle" onChange={(e) => setEvent({...event, title: e.target.value})}/>
                    <label className="form-label" htmlFor="newEventAuthor">author: </label>
                    <input required style={{width: "100%"}} type="text" className="form-control" id="newEventAuthor" onChange={(e) => setEvent({...event, author: e.target.value})}/>
                    <label className="form-label" htmlFor="newEventCategory">category: </label>
                    <select
                        className="form-control rounded"
                        placeholder="Search by category..."
                        id="category"
                        onChange={(e) => setEvent({...event, category: e.target.value})}
                    >
                        <option value="party">Party</option>
                        <option value="concert">Concert</option>
                        <option value="birthday">Birthday</option>
                    </select>
                    <label className="form-label" htmlFor="newEventDate">date: </label>
                    <input required style={{width: "100%"}} type="date" className="form-control" id="newEventDate" onChange={(e) => setEvent({...event, date: e.target.value})}/>
                    <label className="form-label" htmlFor="newEventDesc">description: </label>
                    <input required style={{width: "100%"}} type="text" className="form-control" id="newEventDesc" onChange={(e) => setEvent({...event, description: e.target.value})}/>
                    <label className="form-label" htmlFor="newEventPrice">price: </label>
                    <input required style={{width: "100%"}} type="number" className="form-control" id="newEventPrice" onChange={(e) => setEvent({...event, price: e.target.value})}/>

                    <Card.Footer >
                        <Button style={{marginLeft: "90%"}} className="btn btn-success" type="submit" >Save</Button>
                    </Card.Footer>
                </form>
            </Card.Body>
        </Card>
    )
}