import React from "react";
import { Router } from "react-static";
import { hot } from "react-hot-loader";
import Routes from "react-static-routes";
import universal from "react-universal-component";

const Footer = universal(import(`./shared-components/footer`), {
  loading: () => null
});

 Footer.preload();

class App  extends React.Component{
  componentDidMount(){
    this.id = setInterval(()=>{
      let navElem = document.querySelector("nav");
      if(navElem){
        document.querySelector('.blanket').classList.add('hide');
        clearInterval(this.id)
      }
    },1);
  }

  render(){
  return (
  <Router>
      <div className="content">
      <Routes /> 
      <Footer />
    </div>
  </Router>
  )
}
};

export default hot(module)(App);
