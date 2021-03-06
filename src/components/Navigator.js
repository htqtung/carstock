import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigator extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler navbar-toggler-right" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"> 
                    <span className="navbar-toggler-icon"></span>
                </button >
                <Link className="navbar-brand" to = "/"> My ReactPage</Link > 
                <div className="collapse navbar-collapse" id = "navbarSupportedContent"> 
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li > 
                        <li className="nav-item"> 
                            <Link className="nav-link" to = "/about">About</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" to = "/cars" >Cars</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigator;