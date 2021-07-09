import {Link, Route} from "react-router-dom";
import {useState} from "react";
import {getPost} from "../servises/PostServise";
import Post from "../post/Post";

export default function User ({item})
{
    const [posts, setPosts] = useState([]);
    const getPosts=()=>{
        getPost(item.id).then(value => {
            //console.log(value.data);
            setPosts([...value.data])
        })
    }
    return(
        <div>
            {item.name} -
            <Link to={{
                pathname: '/users/' + item.id + '/allposts',
                state: item
        }}>Show posts</Link>

                <Route path={'/users/' + item.id + '/allposts'}>
                    {getPosts()}
                    {
                        posts.map(value => <Post item={value}/>)
                    }
                </Route>

        </div>
    );
}