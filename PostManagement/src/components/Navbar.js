import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'


const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
            <div className='container '>
                <Link className="navbar-brand" to="/">Post'Times</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mr-auto" id="navbarNav">
                    <ul className="navbar-nav ml-auto  ">
                        <li className="nav-item  mr-3">
                            <NavLink to='/' className="nav-link" >Home </NavLink >
                        </li>
                        <li className="nav-item mr-3">
                            <NavLink to='/about'  className="nav-link" >About</NavLink >
                        </li>
                        <li className="nav-item mr-3">
                            <NavLink to='/contact' className="nav-link" >Contact</NavLink >
                        </li>
                        <li className="nav-item mr3">
                            <NavLink to='/create' className="nav-link" >Create Post</NavLink >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)

