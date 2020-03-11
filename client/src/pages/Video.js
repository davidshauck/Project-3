import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import API from "../utils/API";
// import { Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import StudentCard from "../components/StudentCard";
import VideoCard from "../components/VideoCard";

//ALl components cans have state, but they also all have props.
class Video extends Component {
  state = {
    title: "",
    toResults: false,
    results: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      const title = this.state.title.trim();

      API.getNewVideos(title)
        .then(res => {
          console.log(res.data.items);

          this.setState({
            toResults: true,
            results: res.data.items
          });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    if (this.state.toResults) {
      return (
        <Redirect
          to={{
            pathname: "/results",
            data: { results: this.state.results }
          }}
        />
      );
    }
    return (
      <div>
        {/* <Jumbotron> */}
        {/* <h1 className="display-4">(React) Google Videos Search</h1>
        <p className="lead">Search for and save videos of interest.</p>
        <hr className="my-4" />
        <p className="lead">
          <Link className="btn btn-default btn-lg" to="/" role="button">
            New Search
          </Link>
          <Link className="btn btn-default btn-lg" to="/saved" role="button">
            Saved Videos
          </Link>
        </p> */}
        {/* </Jumbotron> */}
        <Container>
          <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              label="Video Title"
              placeholder="Search Video Title (required)"
            />
            <FormBtn onClick={this.handleFormSubmit} className="btn btn-info">
              Search
            </FormBtn>
          </form>
        </Container>
      </div>
    );
  }
}
//   video under for the rendering the styling and other videos elements

class Videos extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
    videos: [],
    title: "Find a video about your coding interest ..."
  };

  componentDidMount() {
    this.loadvideos(); // what is this in this case? why not just loadbooks()?
  }

  loadvideos = () => {
    API.getVideos()
      .then(res => this.setState({ videos: res.data }))
      .catch(err => console.log(err));
  };

  deleteVideos = id => {
    API.deleteVideo(id)
      .then(res => this.loadvideos())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.first && this.state.last) {
  //     API.saveStudent({
  //       first: this.state.first,
  //       last: this.state.last,
  //       bio: this.state.bio
  //     })
  //       .then(res => this.loadStudents())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    let results = (this.props.location.state || {}).results
      ? this.props.location.state.results
      : this.state.videos;

    return (
      <div>
        {/* <Nav /> */}
        <Container fluid>
          <Row>
            <Col size="md-2" />
            {/* <StudentSearch
                    title={this.state.title}
                  /> */}

            {/* </Col> */}
            <Col size="md-8">
              {this.state.videos.length ? (
                <div className="list-overflow-container">
                  <List>
                    <h2>Videos requested Infos</h2>
                    {results.map(video => (
                      <ListItem key={video._id}>
                        {/* <Link to={"/videos/" + student._id}> */}
                        <StudentCard
                          title={video.title}
                          channel={video.channelTitle}
                          description={video.description}
                          // photo={student.photo}
                          // interests={student.interests.join(", ")}
                          // bio={student.bio}
                          // level={student.level}
                          button={"Send messge"}
                        />
                        {/* </Link> */}
                      </ListItem>
                    ))}
                  </List>
                </div>
              ) : (
                <h3>No Videos to Display</h3>
              )}
            </Col>
            <Col size="md-2" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Video;
