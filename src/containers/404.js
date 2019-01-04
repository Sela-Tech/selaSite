import React from 'react';
import { withSiteData, Head,withRouteData, Link } from 'react-static';
import {WW} from "../styles/home";
import map from "../assets/map.lost.png";

import universal from "react-universal-component";
import config from '../config';

const Navbar = universal(import(`../shared-components/navbar`), {
  loading: () => null
});

Navbar.preload();

class ErrorComp extends React.Component{
render(){
  return (
  <React.Fragment>
    <Navbar isHomePage={false}/>
    <WW className="xs-12">
    <Head>
      <title> Sela Labs | Page Not Found </title>
    </Head>

      <React.Fragment>
          <div className="xs-12" style={{ 
            height: "100vh", 
            margin: '50px 0',
            padding: '0 1em' 
            }}>
            <div className="c-w t-c i-h">
              <div className="c t-c i-h">
              <img src={map} alt='map' style={{height: 200, width: 200, objectFit: 'contain'}}/>
              <h2 style={{
                fontWeight: 400
              }}>Oops! We couldn’t find that page</h2>
              <p style={{
                lineHeight: '27px',
                fontSize: '18px',
                fontWeight: 200,
                textalign: 'center',
                color: '#222829',
                padding: '10px 0'
              }}>Please check your URL, return home or explore projects on Sela</p>
              
              <Link rel="noopener noreferrer"  to="/" style={{
                  display: "inline-block",
                  color: 'white',
                  border: 0,
                  height: "50px",
                  width: "125px",
                  margin: "10px",
                  lineHeight: "50px",
                  padding: "0 1em",
                  borderRadius:"4px",
                  fontSize:"14px",
                  fontWeight:"200",
                  textDecoration:'none',
                  background: 'linear-gradient(149.09deg, #C13C1E 0%, #F2994A 100%)',
                  boxShadow: '0px 2.5px 5px rgba(34, 40, 41, 0.15)',
                }}>Home</Link>

              <a className=''  rel="noopener noreferrer" href={config.projects_route} style={{
                  display: "inline-block",
                  color: '#201D41',
                  border: 0,
                  height: "50px",
                  margin: "10px",
                  textDecoration:'none',
                  width: "150px",
                  lineHeight: "50px",
                  padding: "0 1em",
                  borderRadius:"4px",
                  boxShadow: '0px 2.5px 5px rgba(34, 40, 41, 0.15)',
                  fontSize:"14px",
                  fontWeight:"200",
                  background:"white"
                }}>Explore Projects </a>

              </div>

            </div>
          </div>
        </React.Fragment>

{/* <div className="error xs-12" style={{height:"100vh", width: "100vw"}}>
        <div className="c-w i-h">
          <div className="c i-h t-c">
             <h1>404 - Oh no's! We couldn't find that page :(</h1>
          </div>
        </div>
      </div> */}
    </WW>
  </React.Fragment>
  )
}
}


let ErrorPage = withRouteData(withSiteData(ErrorComp));
export default ErrorPage;
