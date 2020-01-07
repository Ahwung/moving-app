// =============================
// DEPENDENCIES
// =============================
// Packages
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckMoving } from '@fortawesome/free-solid-svg-icons'
// CSS
import './Header.css'

// =============================
// COMPONENT CLASS
// =============================
class Header extends React.Component {
    render () {
        return (
            <header>
                <h1 className="title">MovingHelp</h1>
                <FontAwesomeIcon icon={faTruckMoving} size="4x" />
            </header>
        )
    }
}

// =============================
// EXPORT
// =============================
export default Header;