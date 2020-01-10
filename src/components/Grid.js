// =============================
// DEPENDENCIES
// =============================
// Packages
import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

// =============================
// COMPONENT CLASS
// =============================
class Grid extends React.Component {
    render () {
        return (
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name of Product</th>
                        <th>Price</th>
                        <th>Store</th>
                        <th>Room</th>
                        <th>Category</th>
                        <th>Purchased</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.productData.map(product => {
                        return (
                            <tr key={product.id}>
                                <td><a target="_blank" rel="noopener noreferrer" href={product.url}>{product.name}</a></td>
                                <td>{product.price}</td>
                                <td>{product.store}</td>
                                <td>{product.room}</td>
                                <td>{product.category}</td>
                                <td>{product.bought}</td>
                                <td>
                                    <Button variant="link" onClick={() => {this.props.handleView('editProduct', product)}}>Edit</Button>
                                </td>
                                <td>Delete</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Grid;