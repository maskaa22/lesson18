import {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Comment from "../comment/Comment";
import CommentDetails from "../commentDetails/CommentDetails";
import {getComments} from "../servises/CommentServise";

export default function Comments ()
{
    let [comments, setComments] = useState([]);
    useEffect(()=> {
        getComments().then(value => setComments([...value.data]))
    }, [])

    return(
        <div>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
            <Switch>
                <Route path={'/comments/:postId'} component={CommentDetails}/>
            </Switch>
        </div>
    );
}