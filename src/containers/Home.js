import React from 'react';
import { withSiteData, Head, NavLink,withRouteData } from 'react-static';
import {W,WW} from "../styles/home";
import {LeaderShipInfo} from "../json/home";
import {AdvisorInfo} from "../json/home";

import poster from "../assets/building.png";
import guy from '../assets/guy.png';
import video from "../assets/video.mp4";
import { truncate } from "../helpers/utils";

import universal from "react-universal-component";
import config from '../config';
import particles_setup from "../json/particles.json";
import Particles from 'react-particles-js';
import moment from 'moment';

import LazyLoad from 'react-lazyload';


const Navbar = universal(import(`../shared-components/navbar`), {
  loading: () => null
});

Navbar.preload();

class Home extends React.Component{

componentDidMount(){  
  if(typeof window !== undefined){
    if(window.location.hash === "#about"){
      document.getElementById("about").scrollIntoView()
    }
  }
}

render(){
  
  const { posts } = this.props; 

  return (
  <React.Fragment>
    <Navbar isHomePage={true}/>
    <WW className="xs-12">
    <Head>
      <title> Sela | Impact Verification Platform </title>
    </Head>

    <W className="xs-12">
      <Particles params={particles_setup} />

      <video src={video} playsInline autoPlay={true} loop={true} muted={true} poster={poster}>
        <source data-src={video} type="video/mp4"/>
      </video>

      <div className="xs-10 xs-off-1 i-h">
      <div className="c-w i-h">
        <div className="c t-l i-h">
          
          <h1> Impact Verification Platform </h1>
          
          <div className="xs-12 sm-6 md-5">
          <p> Sela is an impact enterprise building the digital infrastructure for a sustainable society. </p>
          
          <div className='xs-12 sm-10 f-l'>
            <div className="xs-12 sm-6">
              <a  rel="noopener noreferrer" href={config.signup_route} target="_blank" id="orange" className="f-l"> Get Started </a>
            </div>
            <div className="xs-12 sm-6">
              <a rel="noopener noreferrer" href={config.whitepaper} target="_blank" id="deepblue" className="f-l">  Whitepaper </a>
            </div>
          </div>
          
          </div>

        </div>
      </div>
      </div>
    </W>

    <div className="xs-12 icons" id="about">
      <div className="xs-10 xs-off-1">
        <div className="xs-12 sm-2">
          <h3>AS SEEN ON</h3>
        </div>
        
        <div className="xs-12 sm-10">
          <div className="xs-6 sm-2">
            <div id='bbc' />
          </div>
          <div className="xs-6 sm-2">
          <div id='kaw'/>
          </div>
          <div className="xs-6 sm-2">
          <div id='forbes'/>
          </div>
          
          <div className="xs-6 sm-2">
            <div id='huffpost'/>
          </div>
          <div className="xs-6 sm-2">
          <div id='bnc'/>
          </div>
          <div className="xs-6 sm-2">
            <div id='vice'/>
          </div>
          
        </div>
        
        <div className="xs-10 xs-off-1" id='line'/>

      </div>
    </div>

    <div className="xs-12" id="map-side">
      <div className="xs-10 xs-off-1">
        <div className="xs-12 sm-6 ">
        <div className="xs-12 sm-11">
          <h2>About Sela</h2>
          <p>
         Sela is building an ecosystem of tools to power the impact industry. A sustainable future requires understanding and integrating social and environmental awareness into the function of our society's products, services, and organizations. </p>
          <p>
          Private capital is forming at a rapid rate to solve systemic challenges, such as climate change, public infrastructure gaps, and income inequality. Global impact investment AUM has grown from $35.5 billion (2015) to $502 billion (2018) amongst 1,340 organizations. New financial instruments, including Development & Social Impact Bonds, are also being designed and deployed. This accumulation of capital needs accounting and measuring tools that factor social and environmental value while ensuring trusted collaboration among a diverse set of stakeholders.

          </p>
          </div>
        </div>
        <div className="xs-12 sm-6 t-c">
          <img src={guy} alt='cartoon-guy' />
        </div>
        
      </div>
    </div>
    
    <div className='xs-12' id="info">
      <div className="xs-10 xs-off-1">
        <div className="xs-12">

          <div className="xs-12 sm-4 box">
            <div className="xs-12 inner t-c">
              
              <div id='art1'/>
              <h5>TRANSPARENCY</h5>
              <h2>Sela Portal</h2>
            
              <p> The Portal is a web-based project management tool for operationalizing impact standards (e.g. ESG, IFC, IRIS). The tool enables transparency, real-time measurement and verification of capital projects and impact investment.</p>
              
            </div>  
          </div>

          <div className="xs-12 sm-4 box">
            <div className="xs-12 inner t-c">
              
              <div id='art2'/>
              <h5>IMPACT IDENTITY</h5>
              <h2>Sela Citizen App</h2>
            
              <p>
              The Citizen app is a mobile wallet that holds each Sela Citizen’s impact identity. The app enables direct communication for decentralized impact measurement and surveys, real-time collaboration amongst stakeholders, and monetization of impact data using digital currency, fiat and proprietary digital assets.
</p>
              
            </div>  
          </div>


          <div className="xs-12 sm-4 box">
            <div className="xs-12 inner t-c">
              
              <div id= 'art3'/>
              <h5>TRUSTED NETWORK</h5>
              <h2>Sela Marketplace</h2>
            
              <p>
              The Marketplace is a trusted collection of impact investment opportunities for decentralized fundraising and collaboration. Sela Citizens collaborate to fund and execute these impact investments.
</p>
            </div>  
          </div>

        </div>
      </div>
    </div>

    <div className='xs-12' id='imp'>
      <div className="xs-10 xs-off-1">

        <div className='xs-12 sm-6 '>
          <div className='inner'>
            <div className='c-w i-h'>
              <div className='c i-h'>
                <div id='sdg'/>   
              </div>
            </div>
          </div>
        </div>

        <div className='xs-12 sm-6 '>
          <div className='inner' id="text">
            <div className='c-w i-h'>
              <div className='c i-h'>
                <h3> Inclusive Measurement of Progress </h3>
                <p>The Sela ecosystem empowers stakeholders across the many hierarchies and geographies of sustainable development while simultaneously operationalizing impact measurement. </p>
              
                <ul>
                  <li><span className='bar'/>Objective data tracking through blockchain and computer vision</li>
                  <li><span className='bar'/>Real-time reporting of capital and resource deployment</li>
                  <li><span className='bar'/>Incentivization mechanisms across stakeholders</li>
                </ul>
              </div>
            </div>
          
            
          </div>
        </div>
        
      </div>
    </div>
    
    <div className="xs-12" id='roadmap'>
    <h3 className='t-c'>Roadmap</h3>
        
      <div className="xs-10 xs-off-1 sm-11 sm-off-1">
          <div className='xs-12 big'>
            <div className="txt xs-12">
              
              <div className="sm-con offset">
                <h4>Oct 2017</h4>
                <p>Human-centered design with ConsenSys</p>
              </div>

              <div className="sm-con offset">
                <h4>May 2018</h4>
                <p>First pilot</p>
              </div>
  
                <div className="sm-con offset">
                <h4>Mar 2019</h4>
                <p>Initiated first sandbox use-case in Niger Delta</p>
              </div>

              <div className="sm-con offset">
                <h4>Jan 2020</h4>
                <p>Scale product availability</p>
              </div>

              <div className="sm-con offset">
                <h4></h4>
                <p></p>
              </div>
            </div>
              
            <div className="xs-12" id="middle">
              <div className="sm-con">
                <span className="sm point"/>
              </div>

              <div className="sm-con">
                <span className="sm point"/>
              </div>

              <div className="sm-con">
                <span className="sm point"/>
              </div>

              <div className="sm-con">
                <span className="sm point"/>
              </div>

              <div className="sm-con">
                <span className="sm point"/>
              </div>

              <div className="sm-con">
                <span className="sm point"/>
              </div>

              <div className="sm-con">
                <span className="sm point"/>
              </div>

              <div className="sm-con">
                <span className="sm point"/>
              </div>
            </div>

            <div className="bar xs-10"/> 
          
            <div className="txt xs-12">
              <div className="sm-con first ">
                <h4>Apr 2017</h4>
                <p>Company founded</p>
              </div>

              <div className="sm-con offset">
                <h4>Apr 2018</h4>
                <p>Launched MVP and opened Lagos developer lab</p>
              </div>


              <div className="sm-con offset">
                <h4>Oct 2018</h4>
                <p>Began product-market sales fit research with cohort of researchers and industry leaders</p>
              </div>

          
              <div className="sm-con offset">
                <h4>Oct 2019</h4>
                <p>Private beta launch to additional sandboxes</p>
              </div>

            </div> 

          </div>
    
          <div className='xs-12 small'>

            <div className="txt xs-5 r">
              
              <div className="sm-con offset">
                <h4>Oct 2017</h4>
                <p>Human-centered design pilot with ConsenSys</p>
              </div>

              <div className="sm-con offset">
                <h4>May 2018</h4>
                <p>Pilot test</p>
              </div>

              <div className="sm-con offset">
                <h4>March 2019</h4>
                <p>Initiated first sandbox use-case in Niger Delta</p>
              </div>

              <div className="sm-con offset">
                <h4>Jan 2020</h4>
                <p>Scale product availability</p>
              </div>
            </div>

            <div className="xs-2" style={{
              position: 'relative',
              textAlign: 'center'
            }}>
            <div className="xs-1" id="middle">
              <div className="sm-con">
                <span className="sm point"/>
              </div>

              <div className="sm-con">
                <span className="sm point"/>
              </div>

              <div className="sm-con">
                <span className="sm point"/>
              </div>

              <div className="sm-con">
                <span className="sm point"/>
              </div>

              <div className="sm-con">
                <span className="sm point"/>
              </div>

              <div className="sm-con">
                <span className="sm point"/>
              </div>

              <div className="sm-con">
                <span className="sm point"/>
              </div>

              <div className="sm-con">
                <span className="sm point"/>
              </div>
            </div>
    
            <div className="bar xs-1"/>
          </div>  
          
            <div className="txt xs-4 xs-off-1">
              <div className="sm-con first ">
                <h4>April 2017</h4>
                <p>Company founded</p>
              </div>

              <div className="sm-con offset">
                <h4>Apr 2018</h4>
                <p>Launched MVP and opened Lagos developer lab</p>
              </div>

              <div className="sm-con offset">
                <h4>Oct 2018</h4>
                <p>Began product-market sales fit research with cohort of researchers and industry leaders</p>
              </div>

              <div className="sm-con offset">
                <h4>Oct 2019</h4>
                <p>Private beta launch to additional sandboxes</p>
              </div>

            </div> 
          </div>
    
      </div>
    </div>

    <div className='xs-12' id='leadership'>
      <div className='xs-10 xs-off-1'>

            <h3 className="t-c"> Team </h3>
            <div className='xs-12'>

              { LeaderShipInfo.map((info,i)=>{
                return <div className="xs-12 sm-6 md-3 x" key={i}>
                <div className="inner xs-12">
                 <LazyLoad once height={200}> <img className="main" src={info.avatar}/></LazyLoad>
                  <div className="xs-12" id='push-down'>
                    <div className="xs-9 f-l">
                      <h4>{info.name}</h4>
                      <p>{info.pos}</p>
                    </div>
                    
                    <div className="xs-3 f-r">
                      <NavLink to={info.link} rel="noreferrer" className="linkicon">
                        <img src = {info.linkicon} alt="" />
                      </NavLink>
                    </div>
                  </div>

            <h3 className="t-c"> Advisors </h3>
            <div className='xs-12'>

              { AdvisorInfo.map((info,i)=>{
                return <div className="xs-12 sm-6 md-3 x" key={i}>
                <div className="inner xs-12">
                 <LazyLoad once height={200}> <img className="main" src={info.avatar}/></LazyLoad>
                  <div className="xs-12" id='push-down'>
                    <div className="xs-9 f-l">
                      <h4>{info.name}</h4>
                      <p>{info.pos}</p>
                    </div>
                    
                    <div className="xs-3 f-r">
                      <NavLink to={info.link} rel="noreferrer" className="linkicon">
                        <img src = {info.linkicon} alt="" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              }) }
          

            </div>

      </div>
    </div>

    <div className="xs-12" id="latest-posts">
      <div className='xs-10 xs-off-1'>
              <h3 className="t-c"> Latest Updates </h3>

        <div className='xs-12'>
          { posts.map(post => (
              <div className="xs-12 md-4 sm-6" key={post.data.slug}>
                <div className="inner">   
                    <LazyLoad once height={200}><img src={post.data.thumbnail} alt={post.data.slug}/></LazyLoad>
                    <h5>{post.data.title}</h5>
                    <p>{truncate( post.content )}</p>
                    <NavLink to={`/single-post/${ moment(post.data.date).format("YYYY/MM/DD")}/${post.data.slug}`}>Read More</NavLink>
                </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
    
    <div className="xs-12" id="contact-us">
      <div className='xs-10 xs-off-1 sm-6 sm-off-3'>
        <h3 className="t-c"> Contact us </h3>

        <div className='xs-12'>

          <div className="xs-12 sm-6">
            <div className="xs-12 inner">
              <input name="name" placeholder="Name"/>
            </div>
          </div>

            <div className="xs-12 sm-6">
              <div className="xs-12 inner">
                <input name="email" placeholder="Email address"/>
              </div>
            </div>
            
            <div className="xs-12">
              <textarea name="Enter your message"></textarea>
            </div>

            <div className="xs-12 t-c">
              <button>Send</button>
            </div>
        
            <div className="xs-10 xs-off-1 sm-8 sm-off-2 md-4 md-off-4">
              <span className="bar xs-12"/>
            </div>
            
            <div className='xs-12 t-c'>
              <h4 className="t-c"> Follow Sela’s progress </h4>
            </div>

            <div className='xs-12 sela'>
              <div className='xs-9'>
                <input name="email" placeholder='Email address' id='email'/>
              </div>
              <div className='xs-3'>
                <input name="submit" value="Send" type="button" id='btn'/>
              </div>
              
            </div>

        </div>
      </div>


      <div className="xs-10 xs-off-1  bar" />

    </div>

    </WW>
  </React.Fragment>
  )
}
}


let HomePage = withRouteData(withSiteData(Home));
export default HomePage;
