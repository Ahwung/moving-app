// =============================
// DEPENDENCIES
// =============================
// Packages
import React from 'react';

// Components
import Product from './Product.js'
import Form from './Form.js'

// =============================
// LINK TO CONNECT TO API
// =============================
let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'https://moving-help-api.herokuapp.com'
} else {
    console.log('this is for heroku')
}

// =============================
// COMPONENT CLASS: MAIN
// =============================
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    // Function to fetch product data from API
    fetchProducts = () => {
        fetch(`${baseUrl}/products`)
        .then(data => data.json())
        .then(jsonData => {
            this.setState({
                products: jsonData
            })
        }).catch(error => console.log(error))
    }
    
    // Function to create products in API
    handleCreate = (createdData) => {
        fetch(`${baseUrl}/products`, {
            body: JSON.stringify(createdData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            }
        })
        .then(createdProduct => {
            return createdProduct.json()
        })
        .then(jsonedProduct => {
            this.props.handleView('homepage')
            this.setState(prevState => {
                prevState.products = jsonedProduct
                return {products: prevState.products}
            })
        }).catch(error => console.log(error))
    }

    handleUpdate = (updatedData) => {
        fetch(`${baseUrl}/products/${updatedData.id}`, {
            body: JSON.stringify(updatedData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            }
        })
        .then(updatedProduct => {
            this.props.handleView('homepage')
            this.fetchProducts()
        }).catch(error => console.log(error))
    }

    handleDelete = (id) => {
        fetch(`${baseUrl}/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            }
        })
        .then(json => {
            this.setState({
                products: this.state.products.filter(product => product.id !== id)
            })
        }).catch(error => console.log(error))
    }

    // Lifecycle function to pull data to render at page load
    componentDidMount() {
        this.fetchProducts()
    }

    render () {

        let currentPage;
        if(this.props.view.page === 'homepage') {
            currentPage = this.state.products.map((productData) => (
                <Product handleView={this.props.handleView} key={productData.id} productData={productData} handleDelete={this.handleDelete} />
            ))
        } else if (this.props.view.page === 'addProduct') {
            currentPage = <Form handleCreate={this.handleCreate} handleUpdate={this.handleUpdate} view={this.props.view} formInputs={this.props.formInputs} />
        }

        return (
            <div>
                <h1>{this.props.view.pageTitle}</h1>
                {currentPage}
            </div>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Main;