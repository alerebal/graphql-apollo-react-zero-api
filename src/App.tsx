import React from "react";

// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UsersPage from "./pages/Users";
import Home from "./pages/Home";
import PostsPage from "./pages/Posts";
import Navigation from "./pages/Navigation";
import CreateUserPage from "./pages/CreateUser";
import UpdateUserPage from "./pages/UpdateUser";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={UsersPage} />
          <Route path="/posts" component={PostsPage} />
          <Route path="/createUser" component={CreateUserPage} />
          <Route path="/updateUser" component={UpdateUserPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
