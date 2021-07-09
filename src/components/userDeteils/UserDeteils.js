import {useEffect, useState} from "react";

export default function UserDeteils (props)
{
    let {location:{state}} = props;
    let [user,setUser] = useState({});
    useEffect(()=> {
        setUser({...state})
    }, [state])
    return(
        <div>
            <hr/>
            <p><strong>User name</strong> - {user.username}</p>
            <p><strong>Phone</strong> - {user.phone}</p>
            <p><strong>Website</strong> - {user.website}</p>
        </div>
    );
}