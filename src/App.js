import React from "react";
import { Router } from "react-static";
import { hot } from "react-hot-loader";
import Routes from "react-static-routes";

import "./global.css";
import "./myGrid.css";
import universal from "react-universal-component";
import logo from './assets/ring.png';

const Footer = universal(import(`./shared-components/footer`), {
  loading: () => null
});

 Footer.preload();

class App  extends React.Component{

  constructor(props){
    super(props);
    this.state={
      showBlanket: true
    }
  }

  componentDidMount(){
    this.id = setInterval(()=>{
      let navElem = document.querySelector("nav");
      if(Boolean(navElem) && typeof window !== undefined){
        this.setState({
          showBlanket: false
        })
        clearInterval(this.id);
      }
    },500);
  }

  render(){
    const {showBlanket} = this.state;
  return (
  <Router>
      <div className="content">
        { showBlanket && <div className="blanket">
          <div className='c-w i-h'>
            <div className="c i-h t-c">
                <img src={logo} alt="" id="spin-me"/>
            </div>
          </div>
        </div>
        }
      <Routes /> 
      <Footer />
    </div>
  </Router>
  )
}
};

export default hot(module)(App);
