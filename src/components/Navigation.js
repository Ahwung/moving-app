// =============================
// DEPENDENCIES
// =============================
// Packages
import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

// =============================
// COMPONENT CLASS
// =============================
class Navigation extends React.Component {
    render () {
        return (
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto" defaultActiveKey="home">
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
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Navigation;