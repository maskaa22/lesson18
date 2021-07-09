import {useEffect, useState} from "react";
import {getUsers} from "../servises/userServise";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import UserDeteils from "../userDeteils/UserDeteils";

export default function Users ()
{
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, [])

    return(
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
            <Switch>
                <Route path={'/users/:id'} component={UserDeteils}/>
            </Switch>
        </div>
    );
}