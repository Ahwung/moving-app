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

        let borderColor;
        if (this.props.productData.bought === "f") {
            this.props.productData.bought = "false"
            borderColor = "dark"
        } else if (this.props.productData.bought === "t") {
            this.props.productData.bought = "true"
            borderColor = "primary"
        }

        return (
                <Card border={borderColor} style={{width: '18rem'}}>
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
                </Card>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Product;