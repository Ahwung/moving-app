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
    createProduct = (createdData) => {
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

    render () {
        return (
            <div>
                This is the main container
            </div>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Main;