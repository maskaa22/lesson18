import {useEffect, useState} from "react";

export default function PostDetails (props)
{
    let {location:{state}} = props;
    let [post, setPost] = useState({});
    useEffect(()=> {
        setPost({...state})
    }, [state])
    return(
        <div>
            <hr/>
            <p><strong>Title</strong> - {post.title}</p>
            <p><strong>Body</strong> - {post.body}</p>
        </div>
    );
}