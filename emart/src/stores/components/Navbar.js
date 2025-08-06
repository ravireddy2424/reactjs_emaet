


import React from 'react'
import {Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="navSection">
                <div className="title">
                    <h2>E-mart</h2>
                </div>
                <div className="search">
                    <input type="text" placeholder='search.....' />
                </div>
                <div className="user">
                    <div className="user-details">
                        SignIN/SignUP
                    </div>
                    <div className="cart">
                        Cart
                    </div>
                </div>
            </div>
            <div className="subMenu">
                <ul>
                    <Link to='/mobiles'><li>Mobiles</li></Link>
                    <Link to='/computers'><li>Computers</li></Link>
                    <Link to='/books'><li>Books</li></Link>
                </ul>
            
            </div>
        </>
    )
}

export default Navbar