// =============================
// DEPENDENCIES
// =============================
// Packages
import React from 'react';
import Input from 'react-bootstrap/Form'

// =============================
// COMPONENT CLASS
// =============================
class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            id: null,
            name: '',
            price: '',
            url: '',
            store: '',
            room: '',
            category: '',
            bought: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.props.view.page === 'addProduct') {
            this.props.handleCreate(this.state)
        } else if (this.props.view.page === 'editProduct') {
            this.props.handleUpdate(this.state)
        }
    }

    componentDidMount() {
        this.setState({
            id: this.props.formInputs.id,
            name: this.props.formInputs.name,
            price: this.props.formInputs.price,
            url: this.props.formInputs.url,
            store: this.props.formInputs.store,
            room: this.props.formInputs.room,
            category: this.props.formInputs.category,
            bought: this.props.formInputs.bought
        })
    }

    render () {
        return (
            <Input>
                <Input.Group>
                    <Input.Label>Name</Input.Label>
                    <Input.Control type="text" placeholder="Name of Product" id="name" value={this.state.name} onChange={this.handleChange} />
                </Input.Group>
                <Input.Group>
                    <Input.Label>Price</Input.Label>
                    <Input.Control type="number" id="price" value={this.state.price} onChange={this.handleChange} />
                </Input.Group>
                <Input.Group>
                    <Input.Label>URL</Input.Label>
                    <Input.Control type="text" placeholder="Link to Product" id="url" value={this.state.url} onChange={this.handleChange} />
                </Input.Group>
                <Input.Group>
                    <Input.Label>Store</Input.Label>
                    <Input.Control type="text" placeholder="Store of Product" id="store" value={this.state.store} onChange={this.handleChange} />
                </Input.Group>
                <Input.Group>
                    <Input.Label>Room</Input.Label>
                    <Input.Control type="text" placeholder="Desired Room" id="room" value={this.state.room} onChange={this.handleChange} />
                </Input.Group>
                <Input.Group>
                    <Input.Label>Category</Input.Label>
                    <Input.Control type="text" placeholder="Category of Product" id="category" value={this.state.category} onChange={this.handleChange} />
                </Input.Group>
                <Input.Group>
                    <Input.Label>Purchased</Input.Label>
                    <Input.Control as="select" id="bought" value={this.state.bought} onChange={this.handleChange}>
                        <option>False</option>
                        <option>True</option>
                    </Input.Control>
                </Input.Group>
            </Input>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Form;