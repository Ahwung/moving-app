// =============================
// DEPENDENCIES
// =============================
// Packages
import React from 'react';

// Bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './components/Header.js'
import Aside from './components/Aside.js'
import Main from './components/Main.js'
import Navigation from './components/Navigation.js'

// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'homepage',
        pageTitle: 'All Products'
      },
      formInputs: {
        id: null,
        name: null,
        price: null,
        url: null,
        store: null,
        room: null,
        category: null,
        bought: null
      }
    }
  }

  handleView = (view, productData) => {
    let pageTitle =  ''
    let formInputs = {
      id: null,
      name: '',
      price: '',
      url: '',
      store: '',
      room: '',
      category: '',
      bought: ''
    }

    switch (view) {
      case 'homepage':
        pageTitle = 'All Products'
        break
      case 'addProduct':
        pageTitle = 'Add New Product'
        break
      case 'editProduct':
        pageTitle = 'Edit Product'
        formInputs = {
          id: productData.id,
          name: productData.name,
          price: productData.price,
          url: productData.url,
          store: productData.store,
          room: productData.room,
          category: productData.category,
          bought: productData.bought
        }
        break
      default:
        break
    }

    this.setState ({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  }

  render () {
    return (
      <div className="app-container">
        <Header />
        <Aside />
        <div className="main-container">
          <Main />
        </div>
      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default App;
