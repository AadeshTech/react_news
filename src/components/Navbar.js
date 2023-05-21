import React, { Component } from "react";
import{FaHome,FaInfo} from "react-icons/fa";
import { BrowserRouter as  Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state ={
      navbarCollapse:false,
    };
  }

 navbarTogleHandler = () =>{
  if(!this.state.navbarCollapse){
    this.setState({navbarCollapse:true});
  }else{
    this.setState({navbarCollapse:false});
  }

  }
  render() {


    return (
      <nav className={this.state.navbarCollapse?"navbar navbar-expand-lg navbar-light bg-light":"navbar navbar-expand-lg navbar-light bg-light nav-less-height"}>
        <a className="navbar-brand " href="/">
         <span className="logo">AadeshTech</span> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.navbarTogleHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav sp-font h5">
           
            <li className="nav-item mx-2">
              <a className="nav-link" href="/About">
                <FaInfo/>
              </a>
            </li>
           
            <li className="nav-item mx-2">
              <a className="nav-link" href="/Business" >
               Business
             </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/Entertainment">
             Entertainment
           </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/Sports" >
              Sports
                </a>
              
            </li>
            <li className="nav-item mx-2">
              <a  className="nav-link" href="/Health" >
               Health
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/Science" >
               Science
            </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/Tech" >
               Tech
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
