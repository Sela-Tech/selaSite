import React from "react";
import NavbarStyle from "./navbar.style";
import { NavLink } from "react-static";
import logoColored from "../../assets/logo.colored.png";
import universal from "react-universal-component";

import Hamburger from "./hamburger";

const BigScreenNavbar = universal(import(`./big`), {
  loading: () => null
});
const SmallScreenNavbar = universal(import(`./small`), {
  loading: () => null
});

BigScreenNavbar.preload();
SmallScreenNavbar.preload();

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showSideMenu: false,
      scrolledFromTop: false,
      window: {}
    };
  }

  componentWillMount() {
    if (typeof window !== "undefined") {
      this.setState({
        isBigScreen: window.innerWidth > 1023,
        window: window
      });
      window.addEventListener("resize", this.resizeEventListener);
      window.addEventListener("scroll", this.scrollEventListener);
      
    }
  }

  scrollEventListener = ()=>{
    if (typeof window !== undefined) {
      this.setState({
        scrolledFromTop: window.scrollY > 0
      });
    }
  }

  resizeEventListener = () => {
    if (typeof window !== undefined) {
      this.setState({
        isBigScreen: window.innerWidth > 1023
      });
    }
  };

  triggerSideMenu = () =>
    this.setState(p => {
      return { showSideMenu: !p.showSideMenu };
    });

  closeSideMenu = () => {
    this.setState({
      showSideMenu: false
    });
  };

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.resizeEventListener);
      window.removeEventListener("scroll", this.scrollEventListener);
    }
  }

  render() {
    const { isBigScreen, showSideMenu,scrolledFromTop } = this.state;
    
    let isHomePage = false;
    if(typeof window !== undefined){
      isHomePage =  window.location.pathname === "/";
    }

    return (
      <NavbarStyle className="xs-12" 
        scrolledFromTop={ isHomePage ? scrolledFromTop: true }
        showSideMenu={ isHomePage ? showSideMenu: true }>
        <div className="xs-10 xs-off-1" id="sm-margin">

          {isBigScreen ? (
            <React.Fragment>
              <div className="xs-12 sm-4 md-5">
                <li className="xs-12" id="logo-li">
                  <div className="c-w">
                    <div className="c">
                      <div className="xs-10">
                        <NavLink to="/" id="logo-link">
                          <img src={logoColored} alt="logo-plain" id="logo" />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <BigScreenNavbar className="xs-12 sm-8 md-7" />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="xs-12">
                <li className="xs-12" id="logo-li">
                  <div className="c-w">
                    <div className="c">
                      <div className="xs-9 l i-h">
                      <div className="c-w">
                        <div className="c">
                          <NavLink to="/" id="logo-link">
                            <img src={logoColored} alt="logo-plain" id="logo" />
                          </NavLink>
                        </div>
                      </div>
                      
                      </div>
                      <div className="xs-3 show-1023 r i-h">
                      <div className="c-w">
                        <div className="c">
                          <Hamburger
                              onClick={this.triggerSideMenu}
                              showSideMenu={showSideMenu}
                            />
                        </div>
                      </div>
                        
                      </div>
                    </div>
                  </div>
                </li>
              </div>
              <SmallScreenNavbar
                showSideMenu={showSideMenu}
                dismiss={this.triggerSideMenu}
              />
            </React.Fragment>
          )}
        </div>
      </NavbarStyle>
    );
  }
}

export default Navbar;
