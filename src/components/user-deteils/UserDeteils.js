import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {getUser} from "../servises/userServise";
export default function UserDeteils (props)
{//let {match: {params: {id}}} = props;
    let [user, setUser] = useState({});
    let {id} = useParams();
    useEffect(()=> {
        getUser(id).then(value => setUser({...value.data}))
    }, [id])
    return(
        <div>
            {user.id} - {user.username}
        </div>
    );
}