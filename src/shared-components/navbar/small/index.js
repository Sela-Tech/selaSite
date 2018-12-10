import React from "react";
import { NavLink } from "react-static";
import SmallScreen from "./small.style";
import config from "../../../config.js";

export default ({ showSideMenu, dismiss }) => {
  return (
    <React.Fragment>
      <SmallScreen className="xs-12 fade" showSideMenu={showSideMenu}>
        <div className="xs-12" id="small-screen-nav">
            <li className="xs-12">
                <NavLink to="#" onClick={()=>{
                  dismiss()
                  window.scroll(0, document.getElementById("map-side").scrollHeight)
                }}>About</NavLink>
              </li>
              
              <li className="xs-12 ">
                <a href={config.projects_route} target="_blank" onClick={dismiss}>
                Projects
                </a>
              </li>
            
              <li className="xs-12">
                <NavLink to="/blog" onClick={dismiss}>Blog</NavLink>
              </li>
              <li className="xs-12">
                <NavLink to="#" onClick={dismiss}> Contact</NavLink>
              </li>
              
              <li className="xs-12 ">
                <a href={config.projects_route} target="_blank" onClick={dismiss}>
                Log in
                </a>
              </li>
            
              <li className="xs-12 ">
                <a href={config.projects_route} target="_blank" onClick={dismiss} className="btn">
                Get Started
                </a>
              </li>
            
        </div>
      </SmallScreen>
    </React.Fragment>
  );
};
