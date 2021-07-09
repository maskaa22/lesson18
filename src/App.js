import {BrowserRouter as Router,
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
            <Link to={'/users'}>User page</Link>
          </div>

              <Route path={'/users'} component={Users}/>
        </Router>
    </div>
  );
}

export default App;
