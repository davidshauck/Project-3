import React from "react";
import "./searchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        {/* <label htmlFor="course">Courses:</label> */}
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="course"
          list="courses"
          type="text"
          className="form-control"
          placeholder="Find a tutor in...."
          id="course"
        />
        <datalist id="courses">
          {props.courses.map(course => (
            <option value={course} key={course} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
