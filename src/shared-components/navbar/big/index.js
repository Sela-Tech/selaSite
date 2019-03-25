import React from "react";
import { NavLink } from "react-static";
import config from "../../../config.js";


export default class BigScreenNavbar extends React.PureComponent {
  render() {
    const { className } = this.props;
    return (
      <div className={className} id="right-menu">
        <div className="c-w">
          <div className="c">
            <div className="xs-12 inner">
              
              <li className="sm">
                <NavLink to="/#about" onClick={()=>{
                  document.getElementById("about").scrollIntoView();
                  
                }} >About</NavLink>
              </li>
              
              {/* <li className="sm">
                <a href={config.projects_route} rel="noopener noreferrer" target="_blank">
                Projects
                </a>
              </li> */}
              
              <li className="sm">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="sm">
                <NavLink to="#contact"> Contact</NavLink>
              </li>
              
              <li className="sm">
                <a href={config.login_route} rel="noopener noreferrer" target="_blank">
                Log in
                </a>
              </li>
             
              <li className="sm">
                <a href={config.signup_route} rel="noopener noreferrer" target="_blank" className="btn"> 
                Get Started
                </a>
              </li>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}
