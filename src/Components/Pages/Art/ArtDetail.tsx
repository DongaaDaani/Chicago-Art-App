import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

/*
-In this component, I display the actual properties in a popup window. 
-There is an "add favorites" button defined in the component.
*/
export default class ArtDetail extends Component {
    constructor(props) {
        super(props);
    }

    addFavorite = (item) => {
        let array = this.props.favoriteList
        array.push(item)
        console.log("array", array)
        if (array) {
            localStorage.setItem('favItems', JSON.stringify(array));
        }
    }

    render() {
        return (
            <div className="container">
                <Modal {...this.props} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title >
                            Art details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col >
                                <img style={{ width: '18rem' }} src={this.props.url} />
                            </Col>
                            <Col>
                                <h5>{this.props.title} <br /> </h5>
                                <Col> <p>Artist more information : {this.props.history}</p> </Col>
                                <br />
                                <p>Artist : {this.props.artist} <br /></p>
                                <p>Department : {this.props.department}  <br /></p>
                                <p>Place of Origin :  {this.props.place} <br /> </p>
                                <p>Credit : {this.props.credit} <br /> </p>
                                <p> Provenance: {this.props.provenance}</p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>
                            Vissza
                        </Button>
                        <Button onClick={() => { this.addFavorite(this.props.item); alert("Favorite added! You can see the item in your Favorite List!") }} variant="success">Add Favorite
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

