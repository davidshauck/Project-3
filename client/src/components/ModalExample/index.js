import React, { Component } from 'react'
import Button from 'react-bootstrap/button'
import Modal from 'react-bootstrap/modal'
// import ReactBootstrapStyle from 'react-bootstrap/style-links';

class Example extends React.Component {
	// constructor(props, context) {
	// 	super(props, context);

	// 	this.handleShow = this.handleShow.bind(this);
	// 	this.handleClose = this.handleClose.bind(this);

	// 	this.state = {
	// 		show: false,
	// 	};
  // }
  
  state = {
    show: false
  }

	handleClose = () => {
		this.setState({ show: false });
	}

	handleShow = () => {
		this.setState({ show: true });
	}

	render() {
		return (
			<>
				<Button variant="primary" onClick={this.handleShow}>
					Launch demo modal
        </Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
            </Button>
						<Button variant="primary" onClick={this.handleClose}>
							Save Changes
            </Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default () => (<div><Example /></div>)