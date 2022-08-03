import { NavLink } from 'react-router-dom';
import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav">
                    <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                    <button className="btn btn-link nav-item nav-link">Logout</button>
                </div>
            </nav>
        )
    }
}

export default Nav;