import {MyEvents} from "./events/MyEvents";
import {MyOrganizedEvents} from "./events/MyOrganizedEvents";
import {useLogin} from "./access/LoginContext";
import {Link} from "react-router-dom";

export function Events(){
    const {isLoggedIn} = useLogin();

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