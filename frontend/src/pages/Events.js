import {MyEvents} from "../cmp/events/MyEvents";
import {MyOrganizedEvents} from "../cmp/events/MyOrganizedEvents";
import {Link} from "react-router-dom";

export function Events(){
    const isLoggedIn = Boolean(localStorage.getItem("logged"))

    return (
        isLoggedIn ? (
            <>
                <MyEvents />
                { JSON.parse(localStorage.getItem('user')).category === 'o' ? (<MyOrganizedEvents />) : (<div></div>) }
            </>
        ) : (
            <>
                <section className="intro m-2">
                    <div className="mask d-flex align-items-center gradient-custom">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-xl-10">
                                    <div className="card">
                                        <div className="card-body p-5">

                                            <div className="row d-flex align-items-center">
                                                <div className="col-md-6 col-xl-7">

                                                    <div className="text-center pt-md-5 pb-5 my-md-5"
                                                         style={{paddingRight: "24px"}}>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                                             className="img-fluid" alt="Sample login" />
                                                    </div>

                                                </div>
                                                <div className="col-md-6 col-xl-4 text-center">

                                                    <h2 className="fw-bold mb-4 pb-2">Log in to see your events</h2>

                                                    <div className="text-center">
                                                        <Link to="/login" className="text-body mx-1">Login</Link>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    )
}