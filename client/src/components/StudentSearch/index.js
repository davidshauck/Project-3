import React from "react";
import "./studentSearch.css";


function StudentSearch(props) {
  console.log("TITLE", props)
  // USEREF HOOK GIVE IT A REFERENCE TO HTML COMPONENT -- INPUT WITH TYPE CHECKBOX
  // FILTER OUT ONES THAT ARE NOT CHECKED
  // ON GITLAB
  return (
    <div>
      <div className="search-box">
        <h2>{props.title}</h2>

        

    <div className="container-flex checkboxes form-check form-check-inline">
      <input className="form-check-input" name="category" type="checkbox" id="inlineCheckbox1" value="option1"></input>
      <label className="form-check-label" htmlFor="inlineCheckbox1">Javascript</label>
    </div>
    <div className="form-check form-check-inline">
        <input className="form-check-input" name="category" type="checkbox" id="inlineCheckbox2" value="option2"></input>
        <label className="form-check-label" htmlFor="inlineCheckbox2">Jquery</label>
    </div>
    <div className="form-check form-check-inline">
        <input className="form-check-input" name="category" type="checkbox" id="inlineCheckbox3" value="option3"></input>
        <label className="form-check-label" htmlFor="inlineCheckbox3">React</label>
    </div>
    <div className="form-check form-check-inline">
        <input className="form-check-input" name="category" type="checkbox" id="inlineCheckbox3" value="option3"></input>
        <label className="form-check-label" htmlFor="inlineCheckbox3">Ruby on Rails</label>
    </div>
   
   

    <div className="border-top my-3"></div>

    <div className="form-check form-check-inline">
      <input className="form-check-input" name="category" type="checkbox" id="inlineCheckbox1" value="option1"></input>
      <label className="form-check-label" htmlFor="inlineCheckbox1">SQL</label>
    </div>
    <div className="form-check form-check-inline">
        <input className="form-check-input" name="category" type="checkbox" id="inlineCheckbox2" value="option2"></input>
        <label className="form-check-label" htmlFor="inlineCheckbox2">Mongo</label>
    </div>
    <div className="form-check form-check-inline">
        <input className="form-check-input" name="category" type="checkbox" id="inlineCheckbox2" value="option2"></input>
        <label className="form-check-label" htmlFor="inlineCheckbox2">Firebase</label>
    </div>

    <div className="form-check form-check-inline">
        <input className="form-check-input" name="category" type="checkbox" id="inlineCheckbox3" value="option3"></input>
        <label className="form-check-label" htmlFor="inlineCheckbox3">Node.js</label>
    </div>

    <div className="border-top my-3"></div>

    <div className="form-check form-check-inline">
      <input className="form-check-input" name="category" type="checkbox" id="inlineCheckbox1" value="option1"></input>
      <label className="form-check-label" htmlFor="inlineCheckbox1">HTML</label>
    </div>
    <div className="form-check form-check-inline">
        <input className="form-check-input" name="category" type="checkbox" id="inlineCheckbox2" value="option2"></input>
        <label className="form-check-label" htmlFor="inlineCheckbox2">CSS</label>
    </div>


    </div>


  </div>
  );
}

export default StudentSearch;
