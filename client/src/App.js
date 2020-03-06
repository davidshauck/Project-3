import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Students from "./pages/Students";
import Tutors from "./pages/Tutors";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import TutorDetail from "./pages/TutorDetail";
import TutorSignupNew from "./pages/TutorSignupNew";
import StudentSignupNew from "./pages/StudentSignupNew";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/tutors" component={Tutors} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/tutorsignup" component={TutorSignupNew} />
          <Route exact path="/studentsignup" component={StudentSignupNew} />
          <Route exact path="/tutors/:id" component={TutorDetail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
