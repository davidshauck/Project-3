import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Students from "./pages/Students";
import Tutors from "./pages/Tutors";
import Home from "./pages/Home";
import Video from "./pages/Video";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import TutorDetail from "./pages/TutorDetail";
import TutorSignupNew from "./pages/TutorSignupNew";
import StudentSignupNew from "./pages/StudentSignupNew";
import "bootstrap/dist/css/bootstrap.min.css";

/* video component */

import Search from "./pages/Search";
import Results from "./pages/Results";
import Saved from "./pages/Saved";

/* video component */

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
          <Route exact path="/videos" component={Video} />
          {/* video component */}
          <Route exact path="/" component={Search} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/saved" component={Saved} />
          {/* End video component */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
