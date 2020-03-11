import React from "react";
import { FormBtn } from "../Form";
import "./searchForm.css";
import { SearchConsumer } from '../../SearchProvider'
import {withRouter} from 'react-router';

function SearchForm() {
  
  // const navigation = useNavigation();

  return (
    <form className="search">
      <div className="form-group input-field">
        <SearchConsumer>
          {context => (
          <React.Fragment>

          <input
            value={context.state.search}
            onChange={context.state.handleInputChange}
            name="course"
            list="courses"
            type="text"
            className={"form-control jumbotron-input-field"}
            placeholder="Find a tutor in...."
            id="course"
          />
          <datalist id="courses">
            {context.state.courses.map(course => (
              <option value={course} key={course} />
            ))}
          </datalist>
          {/* <Link to={"/students/"}> */}
          <FormBtn 
            button={context.state.button}
            className={context.state.className}
            value={context.state.search}
            onClick={context.state.handleFormSubmit}
            // onClick={event =>  context.state.history.push('/students')}
          />
          </React.Fragment>
          )}
        </SearchConsumer>
      </div>
    </form>
  );
}

export default withRouter(SearchForm);
