import {categoryGenerator, dateStringFormatter} from "../../utilities/validator";
import {useEffect, useState} from "react";
import {EditUserProps, EditUser} from "../../cmp/access/EditUser";
import {AllEvents} from "../../cmp/events/AllEvents";
import axios from 'axios';

export function Admin(){
    const [editUser, setEditUser] = useState(false)
    const [userID, setUserID] = useState(-1)
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8082/users")
            .then(res =>{
                setUsers(res.data)
                console.log(users)
            })
            .catch(error => console.error(error))
    }, [users])

    return(
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
                            id: number,
                            name: number,
                            surname: string,
                            email: string,
                            phone: string,
                            password: string,
                            birthday: string,
                            category: string
                        }) => (
                                <tr key={user.id}>
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
                                        {/*todo post, put in the database*/}
                                        <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => {setEditUser(true); setUserID(user.id)}}>Edit</button>
                                        <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => {alert("User: "+ user.id)}}>Deactivate</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                <h1>Events Settings</h1>
                <AllEvents />
            </>) : (
                <EditUser {...users.find((u: EditUserProps)=> u.id === userID)}/>
        )

    )
}