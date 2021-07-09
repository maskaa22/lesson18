import {BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom";
import './App.css';
import Users from "./components/users/Users";

function App() {
  return (
    <div >
        <Router>

          <div>
            <Link to={'/users'}>user page</Link>
          </div>
          
          <Switch>
              <Route path={'/users'} component={Users}/>
          </Switch>
          
        </Router>
    </div>
  );
}

export default App;
