import React from 'react';
import { withSiteData, Head,withRouteData } from 'react-static';
import {WW} from "../styles/home";

import universal from "react-universal-component";

const Navbar = universal(import(`../shared-components/navbar`), {
  loading: () => null
});

Navbar.preload();

class ErrorComp extends React.Component{
render(){
  return (
  <React.Fragment>
    <Navbar isHomePage={true}/>
    <WW className="xs-12">
    <Head>
      <title> Sela Labs | Page Not Found </title>
    </Head>

      <div className="error xs-12" style={{height:"100vh", width: "100vw"}}>
        <div className="c-w i-h">
          <div className="c i-h t-c">
             <h1>404 - Oh no's! We couldn't find that page :(</h1>
          </div>
        </div>
      </div>
    </WW>
  </React.Fragment>
  )
}
}


let ErrorPage = withRouteData(withSiteData(ErrorComp));
export default ErrorPage;
