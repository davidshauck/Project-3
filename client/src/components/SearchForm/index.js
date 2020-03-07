import React from "react";
import { FormBtn } from "../Form";
import "./searchForm.css";
import { Link } from "react-router-dom";
// import { useNavigation } from 'react-navigation';


function SearchForm(props) {
  // const navigation = useNavigation();

  return (
    <form className="search">
      <div className="form-group input-field">
        {/* <label htmlFor="course">Courses:</label> */}
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="course"
          list="courses"
          type="text"
          className={"form-control jumbotron-input-field"}
          placeholder="Find a tutor in...."
          id="course"
        />
        <datalist id="courses">
          {props.courses.map(course => (
            <option value={course} key={course} />
          ))}
        </datalist>
        <Link to="/students">
        <FormBtn 
          button={props.button}
          className={props.className}
          value={props.search}
          onClick={props.handleFormSubmit}
          // onPress={() => navigation.navigate('Students')}
        />
        </Link>
        {/* <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button> */}
      </div>
    </form>
  );
}

export default SearchForm;
