import {MyOrganizedEvents} from "../events/MyOrganizedEvents";
// @ts-ignore
import users from "../../data/users.json"
import {categoryGenerator} from "../../utilities/validator";
import {useState} from "react";
import {EditUserProps, EditUser} from "./EditUser";

export function Admin(){
    const [editUser, setEditUser] = useState(false)
    const [userID, setUserID] = useState(-1)

    return(
        editUser === false ? (
            <>
                <h1>Users Settings</h1>
                <table className="table align-middle mb-0 bg-white ">
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
                                        <div className="d-flex align-items-center"><p className="mb-1">{user.password}</p></div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center"><p className="mb-1">{user.birthday}</p></div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center"><p className="mb-1">{categoryGenerator(user.category)}</p></div>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => {setEditUser(true); setUserID(user.id)}}>Edit</button>
                                        <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => {alert("User: "+ user.id)}}>Deactivate</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                <h1>Events Settings</h1>
                <MyOrganizedEvents />
            </>) : (
                <EditUser {...users.find((u: EditUserProps)=> u.id === userID)}/>
        )

    )
}