import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const header = (props) => {
    return(
        <div className="header">
            <h1>TodoList</h1>
            <Link className="links" to="/">Home | </Link>  
            <Link className="links" to="/about">About | </Link>
            <Link className="links" to="/topics">Topics</Link>
        </div>
    )
}

export default header;
