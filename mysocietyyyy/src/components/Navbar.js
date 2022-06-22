import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import MySociety from "../images/logo_mySociety.svg";
export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" style={{height:1,width:10}}>
              <img src={MySociety} alt="Beach Resort"  height={45}  />
             
            </Link>
           
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          ><li >
            <Link to="/" style={{fontWeight: 'bold', color:"#a64848", fontSize: 25,}} >MySociety</Link>
          </li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
           
            <li>
                <Link to="/rooms">Flats</Link>
            </li>

            {/* <li>
              <Link to="/AddFlat">Add</Link>
            </li> */}
            
            <li>
              <Link to="/ContactForm">Contact Us</Link>
            </li>
           
            <li>
              <Link to="/">Log In</Link>
            </li>
            <li>
              <Link to="/">Sign Up</Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}
