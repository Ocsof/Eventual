import {categoryGenerator, dateStringFormatter} from "../../utilities/validator";
import {useEffect, useState} from "react";
import {AllEvents} from "../../cmp/events/AllEvents";
import axios from 'axios';
import {NotificationManager} from "react-notifications";
import {EditUser, EditUserProps} from "../../cmp/access/EditUser";

export function Admin(){
    const [editUser, setEditUser] = useState(false)
    const [userID, setUserID] = useState(-1)
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8082/users")
            .then(res =>{
                setUsers(res.data)
            })
            .catch(error => console.error(error))
    }, [users])

    function handleDelete(user){
        if(user.category !== 'a'){
            axios.delete('http://localhost:8082/user/'+ user._id)
                .then(response => {
                    console.log(response.data);
                    if(response.status === 200){
                        NotificationManager.success("Utente eliminato")
                    }
                })
                .catch(error => {
                    console.log(error)
                });
        } else {
            alert("Non puoi eliminare un admin!")
        }
    }

    return(
        localStorage.getItem('user')!== null && JSON.parse(localStorage.getItem('user')).category === 'a'? (
        editUser === false ? (
            <>
                <h1>Users Settings</h1>
                <table className="table table-responsive align-middle m-2 bg-white" >
                        <thead className="bg-light">
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Password</th>
                            <th>Birthday</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user: JSX.IntrinsicAttributes & {
                            _id: number,
                            name: number,
                            surname: string,
                            email: string,
                            phone: string,
                            password: string,
                            birthday: string,
                            category: string
                        }) => (
                                <tr key={user._id}>
                                    <td>
                                        <div className="d-flex align-items-center"><p className="mb-1">{user.name}</p></div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center"><p className="mb-1">{user.surname}</p></div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center"><p className="mb-1">{user.email}</p></div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center"><p className="mb-1">{user.phone}</p></div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center" style={{overflowX: "scroll", width: "80px"}}><p className="mb-1">{user.password}</p></div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center"><p className="mb-1">{dateStringFormatter(user.birthday)}</p></div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center"><p className="mb-1">{categoryGenerator(user.category)}</p></div>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => {setEditUser(true); setUserID(user._id)}}>Edit</button>
                                        <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => {handleDelete(user)}}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                <h1>Events Settings</h1>
                <AllEvents />
            </>) : (
                <EditUser {...users.find((u: EditUserProps)=> u._id === userID)}/>
        ) ) :(
            <span className="alert-danger"> Non hai autorizzazione ad accedere a questa pagina (Admin area) </span>
        )

    )
}