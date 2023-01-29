import {MyEvents} from "./events/MyEvents";
import {MyOrganizedEvents} from "./events/MyOrganizedEvents";
import {Link} from "react-router-dom";

export function Events(){
    const isLoggedIn = Boolean(localStorage.getItem("logged"));

    return (
        isLoggedIn ? (
            <>
                <MyEvents />
                <MyOrganizedEvents />
            </>
        ) : (
            <>
                <p>Log in to see your events</p>
                <Link to="/login" className="text-body mx-1">Login in here</Link>
            </>
        )
    )
}