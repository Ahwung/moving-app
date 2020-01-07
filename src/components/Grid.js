// =============================
// DEPENDENCIES
// =============================
// Packages
import React from 'react';
import Table from 'react-bootstrap/Table'

// =============================
// COMPONENT CLASS
// =============================
class Grid extends React.Component {
    render () {
        return (
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <th>{this.props.productData.name}</th>
                        <th>{this.props.productData.price}</th>
                        <th>{this.props.productData.store}</th>
                        <th>{this.props.productData.room}</th>
                        <th>{this.props.productData.category}</th>
                        <th>{this.props.productData.bought}</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Grid;