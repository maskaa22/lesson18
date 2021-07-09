import {Link, Route} from "react-router-dom";
import {useState} from "react";
import {getPost} from "../servises/PostServise";

export default function User ({item})
{
    const [posts, setPosts] = useState([]);
    const getPosts=()=>{
        getPost(item.id).then(value => {
            setPosts([...value.data])
        })
    }
    return(
        <div>
            {item.name} -
            <Link to={'/users/' + item.id + '/allposts'}>Show posts</Link>

                <Route path={'/users/' + item.id + '/allposts'}>
                    {getPosts()}
                    {
                        posts.map((value) =>
                        {
                           return <div key={value.id}><i>{value.title}</i></div>
                        })
                    }
                </Route>

        </div>
    );
}