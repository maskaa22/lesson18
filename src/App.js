import {BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom";
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";


function App() {
  return (
    <div >
        <Router>

          <div>
            <Link to={'/users'}>User page</Link>
          </div>
          <div>
             <Link to={'/posts'}>Post page</Link>
          </div>

          
          <Switch>
              <Route path={'/users'} component={Users}/>
              <Route path={'/posts'} component={Posts}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
