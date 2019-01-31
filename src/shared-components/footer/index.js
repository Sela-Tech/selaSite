import React from "react";
import instagram from "../../assets/sm/instagram.svg";
import twitter from "../../assets/sm/twitter.svg";
import youtube from "../../assets/sm/youtube.svg";
import medium from "../../assets/sm/medium.svg";
import config from "../../config.js";

// import { NavLink } from "react-static";
import FooterStyle from "./footer.style";

export default class Footer extends React.Component {
  render() {
    return (
      <FooterStyle className="xs-12">
      
        <div className="xs-10 xs-off-1">
          <div className="xs-12 sp">
            <div className="xs-12 md-6 f-l">
              <p> © 2018. Sela </p>
            </div>
            <div className="xs-12 md-6 f-r">
              <div className="xs-12 md-8 md-off-4">
                <div className="xs-3">
                  <a href={config.youtube} rel="noopener noreferrer" target="_blank">
                    <img src={youtube} />
                  </a>
                </div>
                <div className="xs-3">
                  <a href={config.twitter} rel="noopener noreferrer" target="_blank">
                    <img src={twitter} />
                  </a>
                </div>
                <div className="xs-3">
                  <a href={config.instagram} rel="noopener noreferrer" target="_blank">
                    <img src={instagram} />
                  </a>
                </div>
                <div className="xs-3">
                  <a href={config.medium} rel="noopener noreferrer" target="_blank">
                    <img src={medium} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FooterStyle>
    );
  }
}
