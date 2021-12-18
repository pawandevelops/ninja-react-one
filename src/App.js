import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import BlogDetails from './BlogDetails';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>

          <Route path="/create">
              <Create></Create>
          </Route>

          <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
          </Route>

          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
