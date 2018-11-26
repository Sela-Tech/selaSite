import React from "react";
import { NavLink } from "react-static";

export default class BigScreenNavbar extends React.PureComponent {
  render() {
    const { className } = this.props;
    return (
      <div className={className} id="right-menu">
        <div className="c-w">
          <div className="c">
            <div className="xs-12 inner">
              <li className="sm">
                <NavLink to="/a-propos">About</NavLink>
              </li>
              <li className="sm">
                <NavLink to="/nos-services">Projects</NavLink>
              </li>
              <li className="sm">
                <NavLink to="/nos-actualités">Blog</NavLink>
              </li>
              <li className="sm">
                <NavLink to="#"> Contact</NavLink>
              </li>
              <li className="sm">
                <NavLink to="#"> Log in</NavLink>
              </li>
              
              <li className="sm">
                <NavLink to="#" className="btn">
                  Get Started
                </NavLink>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
