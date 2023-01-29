import React, {useState} from "react";

// @ts-ignore
import users from "../../data/users.json"
import {EditUserProps} from "../intern/EditUser";
import {useNavigate} from "react-router-dom";

export function EditProfile(){
    const navigate = useNavigate()
    const email = localStorage.getItem("username")
    const [user, setUser] = useState({...users.find( (u:EditUserProps) => u.email == email)})

    /*todo: extract info by email from database of the user*/

    function handleSave(){
        /*todo: update user in the database*/
        console.log(JSON.stringify(user))
        navigate("/login")
    }

    return (
        <section className="gradient-custom m-2">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{borderRadius: "25px"}}>
                            <div className="card-body p-md-2">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-2 mt-2">Edit Profile</p>
                                        <form className="small" onSubmit={handleSave}>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="SignUpName"
                                                        className="form-control"
                                                        placeholder={user.name}
                                                        value={user.name}
                                                        onChange={(e) => setUser({...user, name:e.target.value})}
                                                    />
                                                    <label className="form-label" htmlFor="SignUpName">Name</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="SignUpSurname"
                                                        className="form-control"
                                                        placeholder={user.surname}
                                                        value={user.surname}
                                                        onChange={(e) => setUser({...user, surname:e.target.value})}
                                                    />
                                                    <label className="form-label" htmlFor="SignUpSurname">Surname</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                <input
                                                    type="email"
                                                    id="SignupEmail"
                                                    className="form-control"
                                                    placeholder={user.email}
                                                    value={user.email}
                                                    onChange={(e) => setUser({...user, email:e.target.value})}
                                                />
                                                <label className="form-label" htmlFor="SignupEmail">Email</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                <input
                                                    type="tel"
                                                    id="SignUpPhone"
                                                    className="form-control"
                                                    placeholder={user.phone}
                                                    value={user.phone}
                                                    onChange={(e) => setUser({...user, phone:e.target.value})}
                                                />
                                                    <label className="form-label" htmlFor="SignUpPhone">Phone</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                <input
                                                    type="password"
                                                    id="SignUpPassword"
                                                    className="form-control"
                                                    placeholder={user.password}
                                                    disabled={true}
                                                />
                                                    <label className="form-label" htmlFor="SignUpPassword">Password</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-cake-candles fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                <input type="date"
                                                       id="SignUpBirthday"
                                                       onChange={(e) => setUser({...user, birthday:e.target.value})}
                                                       className="form-control"
                                                       defaultValue={user.birthday}
                                                       placeholder={user.birthday}
                                                />
                                                    <label className="form-label" htmlFor="SignUpBirthday">Birthday</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user-secret fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                            <select
                                                id="category"
                                                name="category"
                                            >
                                                <option value="p">Client / Participant</option>
                                                <option value="o">Organizer</option>
                                            </select>
                                                    <br />
                                                    <label className="form-label" htmlFor="category">Category</label>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-primary btn-lg m-2">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"  className="img-fluid" alt="Sample signup" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}