import {useEffect, useState} from "react";
export default function CommentDetails (props)
{
    let {location:{state}} = props;
    let [comment, setComment] = useState({});
    useEffect(()=> {
        setComment({...state})
    }, [state])
    return(
        <div>
            <hr/>
            <p><strong>Name</strong> - {comment.name}</p>
            <p><strong>Body</strong> - {comment.body}</p>
            <p><strong>Email</strong> - {comment.email}</p>
        </div>
    );
}