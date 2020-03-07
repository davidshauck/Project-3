import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import BookBtn from "../../components/BookBtn";
import VideoBtn from "../../components/VideoBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class ResultsVD extends Component {
  state = {
    books: [], //@todo -to remove
    videos: [],
    target: "",
    noResults: false
  };

  componentDidMount() {
    const data = this.props.location.data;
    if (data.results && data.results.length > 0) {
      this.setState({
        // books: data.results.filter((value, index) => index < 5), //@todo -to remove
        videos: data.results.filter((value, index) => index < 5),
        target: "_blank"
      });
    } else {
      this.setState({
        noResults: true
      });
    }
  }

  saveBook = book => {
    API.saveBook(book)
      .then(res => {
        const currentBooks = this.state.books;
        const filterBooks = currentBooks.filter(
          book => book.id !== res.data.id
        );
        this.setState({
          books: filterBooks
        });
      })
      .catch(err => console.log(err));
  };
  saveVideo = video => {
    API.saveBook(video)
      .then(res => {
        const currentVideos = this.state.videos;
        const filterVideos = currentVideos.filter(
          video => video.id !== res.data.id
        );
        this.setState({
          videos: filterVideos
        });
      })
      .catch(err => console.log(err));
  };

  render_old() {
    if (this.state.noResults) {
      return (
        <div>
          <Jumbotron>
            <h1 className="display-4">(React) Google Books Search</h1>
            <p className="lead">Search for and annotate books of interest.</p>
            <hr className="my-4" />
            <p className="lead">
              <Link className="btn btn-default btn-lg" to="/" role="button">
                New Search
              </Link>
              <Link
                className="btn btn-default btn-lg"
                to="/saved"
                role="button"
              >
                Saved Books
              </Link>
            </p>
          </Jumbotron>
          <Container>
            <Link to="/">No results - click here to search again.</Link>
          </Container>
        </div>
      );
    }
    return (
      <div>
        <Jumbotron>
          <h1 className="display-4">(React) Google Books Search</h1>
          <p className="lead">Search for and save books of interest.</p>
          <hr className="my-4" />
          <p className="lead">
            <Link className="btn btn-default btn-lg" to="/" role="button">
              New Search
            </Link>
            <Link className="btn btn-default btn-lg" to="/saved" role="button">
              Saved Books
            </Link>
          </p>
        </Jumbotron>
        <Container>
          <h2>Search Results</h2>
          <List>
            {this.state.books.map((book, index) => (
              <ListItem key={book.id}>
                <div className="date-div">
                  <a
                    key={"" + index + book.id}
                    href={book.volumeInfo.infoLink}
                    target={this.state.target}
                  >
                    {book.volumeInfo.title}
                  </a>
                  <p>Written By {book.volumeInfo.authors[0]}</p>
                  <p>
                    <img
                      align="left"
                      style={{ paddingRight: 10 }}
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt="new"
                    />
                    {book.volumeInfo.description}
                  </p>
                </div>
                <div className="book-btn-div">
                  <BookBtn
                    key={"" + book.id + index}
                    btntype="info"
                    disabled={book.volumeInfo.infoLink === "/"}
                    onClick={() =>
                      this.saveBook({
                        title: book.volumeInfo.title,
                        author: book.volumeInfo.authors[0],
                        description: book.volumeInfo.description,
                        image: book.volumeInfo.imageLinks.smallThumbnail,
                        link: book.volumeInfo.infoLink,
                        _id: book.id
                      })
                    }
                  >
                    Save
                  </BookBtn>
                </div>
              </ListItem>
            ))}
          </List>
        </Container>
      </div>
    );
  }

  render() {
    if (this.state.noResults) {
      return (
        <div>
          <Jumbotron>
            <h1 className="display-4">(React) Google Videos Search</h1>
            <p className="lead">Search for and annotate videos of interest.</p>
            <hr className="my-4" />
            <p className="lead">
              <Link className="btn btn-default btn-lg" to="/" role="button">
                New Search
              </Link>
              <Link
                className="btn btn-default btn-lg"
                to="/saved"
                role="button"
              >
                Saved Videos
              </Link>
            </p>
          </Jumbotron>
          <Container>
            <Link to="/">No results - click here to search again.</Link>
          </Container>
        </div>
      );
    }
    return (
      <div>
        <Jumbotron>
          <h1 className="display-4">(React) Google Videos Search</h1>
          <p className="lead">Search for and save videos of interest.</p>
          <hr className="my-4" />
          <p className="lead">
            <Link className="btn btn-default btn-lg" to="/" role="button">
              New Search
            </Link>
            <Link className="btn btn-default btn-lg" to="/saved" role="button">
              Saved Videos
            </Link>
          </p>
        </Jumbotron>
        <Container>
          <h2>Search Results</h2>
          <List>
            {this.state.videos.map((video, index) => (
              <ListItem key={video.id}>
                <div className="date-div">
                  <a
                    key={video.id.videoId}
                    href={"https://www.youtube.com/watch?v=" + video.id.videoId}
                    target={this.state.target}
                  >
                    <img src={video.snippet.thumbnails.default.url} />
                    <br />

                    {video.snippet.title}
                  </a>
                  {/* <a
                    key={"" + index + video.id}
                    //href={video.volumeInfo.infoLink}
                    target={this.state.target}
                  >
                    {video.volumeInfo.title}
                  </a>
                  <p>Written By {video.volumeInfo.authors[0]}</p>
                  <p>
                    <img
                      align="left"
                      style={{ paddingRight: 10 }}
                      src={video.volumeInfo.imageLinks.smallThumbnail}
                      alt="new"
                    />
                    {video.volumeInfo.description}
                  </p> */}
                </div>
                <div className="video-btn-div">
                  <VideoBtn
                    key={video.id.videoId}
                    btntype="info"
                    // disabled={video.volumeInfo.infoLink === "/"}
                    onClick={() =>
                      this.saveVideo({
                        title: video.snippet.title,
                        author: "",
                        description: "",
                        image: video.snippet.thumbnails.default.url,
                        link:
                          "https://www.youtube.com/watch?v=" + video.id.videoId,
                        _id: video.id.videoId
                      })
                    }
                  >
                    Save
                  </VideoBtn>
                </div>
              </ListItem>
            ))}
          </List>
        </Container>
      </div>
    );
  }
}

export default ResultsVD;
