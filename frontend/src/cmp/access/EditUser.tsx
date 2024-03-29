import * as React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {categoryGenerator, categoryGeneratorForDatabase, dateStringFormatter} from "../../utilities/validator";
import {Button} from "react-bootstrap";
import axios from "axios";
import {NotificationManager} from "react-notifications";

export type EditUserProps = {
    _id: number,
    name: string,
    surname: string,
    email: string,
    phone: string,
    password: string,
    birthday: string,
    category: string
}

export function EditUser({_id, name, surname, email, phone, password, birthday, category}:EditUserProps) {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        _id: _id,
        name: name,
        surname: surname,
        email: email,
        phone: phone,
        password: password,
        birthday: birthday,
        category: category
    })

    function handleSave(){
        axios.put('http://localhost:8082/user/'+ user._id, user)
            .then(response => {
                console.log(response.data);
                if(response.status === 200){
                    NotificationManager.success("User updated!")
                    localStorage.setItem('user', JSON.stringify(user))
                }
            })
            .catch(error => {
                console.log(error)
            });
        navigate(0);
    }

    return (
        <>
            <h1>Edit User: {user._id}</h1>

            <div className="d-flex align-items-center">
                <input className="mb-1" placeholder={user.name} value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
            </div>
            <div className="d-flex align-items-center">
                <input className="mb-1" placeholder={user.surname} value={user.surname} onChange={(e) => setUser({...user, surname: e.target.value})} />
            </div>
            <div className="d-flex align-items-center">
                <input className="mb-1" placeholder={user.email} value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
            </div>
            <div className="d-flex align-items-center">
                <input className="mb-1" placeholder={user.phone} value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})} />
            </div>

            <div className="d-flex align-items-center">
                <input className="mb-1" placeholder={user.password} value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
            </div>

            <div className="d-flex align-items-center">
                <input type="date" className="mb-1" placeholder={dateStringFormatter(user.birthday)} value={dateStringFormatter(user.birthday)} onChange={(e) => setUser({...user, birthday: e.target.value})} />
            </div>

            <div className="d-flex align-items-center">
                <input className="mb-1" placeholder={categoryGenerator(user.category)} value={categoryGenerator(user.category)} onChange={(e) => setUser({...user, category: categoryGeneratorForDatabase(e.target.value)})} />
            </div>
            <Button className="btn btn-success" onClick={handleSave}>Save</Button>
        </>
    )
}