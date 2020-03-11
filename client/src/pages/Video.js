import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { ListItem } from "../components/List";
import VideoCard from "../components/VideoCard";
import { FormBtn } from "../components/Form";

//ALl components cans have state, but they also all have props.
class Video extends Component {
  state = {
    title: "",
    toResults: false,
    videos: [],
    search: "",
    courses: ["Angular", "CSS", "Firebase", "HTML", "Javascript", "Jquery", "Mongo", "Mongoose", "Node.js", "SQL", "React", "Ruby on Rails"],
    videos: [],
    error: true,
    button: "Submit",
    className: "btn btn-success jumbotron-search-button"
  };

  handleInputChange = event => {
    event.preventDefault();
    console.log("INPUT ", event.target.value)
    const { name, value } = event.target;
    this.setState({ ...this.state, search: event.target.value
      // [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("SUBMIT ", this.state.title)
    if (this.state.title) {
      const title = this.state.title.trim();
      API.getNewVideos(title)
        .then(res => {
          console.log("RESULTS ", res.data.items);
          this.setState({
            ...this.state,
            toResults: true,
            videos: res.data.items
          });
        })
        .catch(err => console.log(err));
    }
  };

    render() {
      return (
        <div>
          <Container fluid>
            <Row>
              <Col size="md-2">
                {/* <div class="box">
                </div> */}
              </Col>
              <Col size="md-8">
              <div className="box" style={{backgroundColor: "#cccccc"}}>
                <h5 style={{color: "White"}}>Search</h5>             
                <form className="search">
                  <div className="form-group input-field">
                  <input
                    value={this.state.search}
                    onChange={e => this.handleInputChange(e)}
                    name="title"
                    list="courses"
                    type="text"
                    className={"form-control jumbotron-input-field"}
                    placeholder="Find a webinar...."
                    id="course"
                  />
                  <datalist id="courses">
                    {this.state.courses.map(video => (
                      <option value={video} key={video} />
                  ))}
                  </datalist>
                  <button value={this.state.search} className={this.state.className} onClick={e => this.handleFormSubmit(e)}>
                    Submit
                  </button>
                </div>
              </form>

              </div>
                {this.state.videos.length ? (
                  <div className="list-overflow-container">
                    <ul className="list-group">
                      <h2>TOP WEBINARS</h2>
                      {this.state.videos.map(video => (
                        <ListItem key={video.etag}>
                          <VideoCard 
                            title={video.snippet.title}
                            thumbnail={video.snippet.thumbnails.medium.url}
                            url={"http://www.youtube.com/watch?v="+video.id.videoId}
                            description={video.snippet.description}
                            button={"Save"}  
                            overallRating={5}      
                          />
                        </ListItem> 
                      ))}
                    </ul>
                  </div>
                    ) : (
                  <div className="box">
                  <h3>No Results to Display</h3>
                  </div>
                    )}
            </Col>
            <Col size="md-2">
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Video;