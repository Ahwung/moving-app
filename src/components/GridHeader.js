// =============================
// DEPENDENCIES
// =============================
// Packages
import React from 'react';
import Table from 'react-bootstrap/Table'

// =============================
// COMPONENT CLASS
// =============================
class GridHeader extends React.Component {
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
                        <th>Bought</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
            </Table>
        )
    }
}

// =============================
// EXPORT
// =============================
export default GridHeader;