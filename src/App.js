import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from "./Components/Home/Home";
import Post from "./Components/Post/Post";
import PostDetail from "./Components/PostDetail/PostDetail";

function App() {
  return (
    <div>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
            <li>
              <Link to="/post">Post</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/post">
            <h1>Post</h1>
          </Route>
          <Route path="/post/:id">
           <PostDetail></PostDetail>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
