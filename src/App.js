// =============================
// DEPENDENCIES
// =============================
// Packages
import React from 'react';

// Components
import Header from './components/Header.js'
import Aside from './components/Aside.js'
import Main from './components/Main.js'
import Navigation from './components/Navigation.js'

// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {


  render () {
    return (
      <div className="app-container">
        <Header />
      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default App;
