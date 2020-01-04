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
            </Input>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Form;