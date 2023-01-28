import {MyEvents} from "./events/MyEvents";
import {MyOrganizedEvents} from "./events/MyOrganizedEvents";

export function Events(){
    return (
        <>
            <MyEvents />
            <MyOrganizedEvents />
        </>
    )
}