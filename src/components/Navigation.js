// =============================
// DEPENDENCIES
// =============================
// Packages
import React from 'react';
import Nav from 'react-bootstrap/Nav'

// =============================
// COMPONENT CLASS
// =============================
class Navigation extends React.Component {
    render () {
        return (
            <Nav variant="pills" defaultActiveKey="home">
                <Nav.Item>
                    <Nav.Link eventKey="home" onClick={() => {this.props.handleView('homepage')}}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="table" onClick={() => {this.props.handleView('table')}}>Table</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="add" onClick={() => {this.props.handleView('addProduct')}}>Add New Product</Nav.Link>
                </Nav.Item>
                </Nav>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Navigation;