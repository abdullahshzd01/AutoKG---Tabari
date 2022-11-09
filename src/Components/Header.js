import '../App.css'
import React from 'react';
import PropTypes from 'prop-types';

export function Header(props) {

    return (
        <nav className="navbarStyle navbar navbar-expand-lg navbar-light">
            <div className="container-fluid navbarStyle">
                <a className="navbar-brand " href="../public/index.html">{props.title}</a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* navbar-collapse */}
                <div className="nav_itemStyle">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="../public/index.html">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li> */}
                    </ul>
                    {/* {props.searchBar ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : "no search bar"} */}
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    title: "Your Title here",
    searchBar: false
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}
