import {Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPosts} from "../servises/PostServise";
import Post from "../post/Post";
import PostDetails from "../postDetails/PostDetails";


export default function Posts ()
{
    let [posts, setPosts] = useState([]);
    useEffect(()=> {
        getPosts().then(value => setPosts([...value.data]))
    }, [])
    
    return(
        <div>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
            <Switch>
                <Route path={'/posts/:userId'} component={PostDetails}/>
            </Switch>
        </div>
    );
}