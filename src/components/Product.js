// =============================
// DEPENDENCIES
// =============================
// Packages
import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

// =============================
// COMPONENT CLASS
// =============================
class Product extends React.Component {
    render () {

        // let borderColor;
        // if (this.props.productData.bought === "f") {
        //     this.props.productData.bought = "false"
        //     borderColor = "dark"
        // } else if (this.props.productData.bought === "t") {
        //     this.props.productData.bought = "true"
        //     borderColor = "primary"
        // }

        return (
            <div className="product-container">
                <Card border="dark" style={{width: '18rem'}} className="card">
                    <Card.Body>
                        <Card.Title>{this.props.productData.name}</Card.Title>
                        <Card.Text>
                            Price: ${this.props.productData.price}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup>
                        <ListGroup.Item>Store: {this.props.productData.store}</ListGroup.Item>
                        <ListGroup.Item>Room: {this.props.productData.room}</ListGroup.Item>
                        <ListGroup.Item>Category: {this.props.productData.category}</ListGroup.Item>
                        <ListGroup.Item>Bought: {this.props.productData.bought}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link onClick={() => {this.props.handleView('editProduct', this.props.productData)}}>Edit Product</Card.Link>
                        <Card.Link onClick={() => {this.props.handleDelete(this.props.productData.id)}}>Delete Product</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Product;