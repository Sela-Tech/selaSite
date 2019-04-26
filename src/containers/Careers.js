import React from 'react'
import {  Head } from 'react-static';
import { WW } from "../styles/post";
import universal from "react-universal-component";

const Navbar = universal(import(`../shared-components/navbar`), {
  loading: () => null
});

// Navbar.preload();

const CareersPage = (()  => {
  return <React.Fragment>
  <Navbar isHomePage={false}/>
  
  <WW className="xs-12">
  <Head>
    <title> Sela Labs | Careers </title>
  </Head>

  <div className="main-post-page xs-12">
    <div className="xs-10 xs-off-1">
    
    </div>
  </div>
</WW>  
  </React.Fragment>
});


export default CareersPage;
