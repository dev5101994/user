import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" exact to="/">React User</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" exact to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" exact to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" exact to="/contact">Contact</Link>
                            </li>



                        </ul>

                    </div>
                    {/* <button>
                        <Link className="btn btn-outline-light" exact to="/user/add" >Add User</Link>
                    </button> */}

                    <Link className="btn btn-outline-light" exact to="/user/add" >Add User</Link>

                </div>
            </nav>

        </div>
    )
}

export default Navbar;