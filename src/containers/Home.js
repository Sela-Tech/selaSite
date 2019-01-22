import React from 'react';
import { withSiteData, Head, NavLink,withRouteData } from 'react-static';
import {W,WW} from "../styles/home";
import {LeaderShipInfo} from "../json/home";

import poster from "../assets/building.png";
import guy from '../assets/guy.png';
import video from "../assets/video.mp4";

import art1 from "../assets/illustrations/art1-min.png";
import art2 from "../assets/illustrations/art2-min.png";
import art3 from "../assets/illustrations/art3-min.png";

import sdg from "../assets/sdgs-min.png";

import bbc from "../assets/icons/bbc.svg";
import huffpost from "../assets/icons/huffpost.svg";
import bnc from "../assets/icons/bnc.svg";
import kaw from "../assets/icons/kaw.svg";
import vice from "../assets/icons/vice.svg";
import forbes from "../assets/icons/forbes.png";
import { truncate } from "../helpers/utils";

import universal from "react-universal-component";
import config from '../config';
import particles_setup from "../json/particles.json";
import Particles from 'react-particles-js';


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
      <title> Sela Labs | Impact Project Verification Platform </title>
    </Head>

    <W className="xs-12">
      <Particles params={particles_setup} />

      <video src={video} autoPlay={true} loop={true} muted={true} poster={poster}/>
      <div className="xs-10 xs-off-1 i-h">
      <div className="c-w i-h">
        <div className="c t-l i-h">
          
          <h1> Let's Go. </h1>
          
          <div className="xs-12 sm-6 md-5">
          <p> Sela is a platform that enables transparent execution and measurement of sustainable development projects, eliminating traditional barriers of entry for capital into the emerging world. </p>
          
          <div className='xs-12 sm-10 f-l'>
                <div className="xs-12 sm-6">
                  <a href={config.signup_route} target="_blank" id="orange" className="f-l"> Get Started </a>
                </div>
                <div className="xs-12 sm-6">
                  <a href={config.whitepaper} target="_blank" id="deepblue" className="f-l">  Whitepaper </a>
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
            <img src={bbc} alt=""/>
          </div>
          <div className="xs-6 sm-2">
          <img src={kaw} alt=""/>
          </div>
          <div className="xs-6 sm-2">
          <img src={forbes} alt=""/>
          </div>
          
          <div className="xs-6 sm-2">
            <img src={huffpost} alt=""/>
          </div>
          <div className="xs-6 sm-2">
          <img src={bnc} alt=""/>
          </div>
          <div className="xs-6 sm-2">
            <img src={vice} alt=""/>
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
        The emerging world is the future. By 2050, Africa's population is projected to become 2.5 billion. Lack of trust, leadership, and community has led to costly capital that can't sustain. 
          </p>
          <p>
          Sela is eliminating traditional barriers of entry for capital into the emerging world. Sela introduces trust and transparency into transactions by tracking capital flows and rewarding trustworthy behavior.

          </p>
          </div>
        </div>
        <div className="xs-12 sm-6 t-c">
          <img src={guy} alt="" id='guy'/>
        </div>
        
      </div>
    </div>
    
    <div className='xs-12' id="info">
      <div className="xs-10 xs-off-1">
        <div className="xs-12">

          <div className="xs-12 sm-4 box">
            <div className="xs-12 inner t-c">
              
              <img src={art1} alt=""/>
              <h5>REAL TIME AUDIT</h5>
              <h2>Sela Portal</h2>
            
              <p> Sela uses blockchain and artificial intelligence to track all transactions and impact-driven measurements, fostering trust among project stakeholders.</p>
              
            </div>  
          </div>

          <div className="xs-12 sm-4 box">
            <div className="xs-12 inner t-c">
              
              <img src={art2} alt=""/>
              <h5>TRUSTED NETWORK</h5>
              <h2>Sela Token and Reputation Score</h2>
            
              <p>
              Sela operationalizes impact methodologies by combining AI-powered objective data collection and stakeholder participation towards direct, measurable effects on the UN’s Sustainable Development Goals (SDGs).  </p>
              
            </div>  
          </div>


          <div className="xs-12 sm-4 box">
            <div className="xs-12 inner t-c">
              
              <img src={art3} alt=""/>
              <h5>SECURE PAYMENTS</h5>
              <h2>AI-Powered Sela Wallet</h2>
            
              <p>
              Sela identifies and publicly rewards the right leadership with the Sela Token. Sela also engages communities to track their performance, measure impact, and celebrate success using the Sela Wallet.</p>
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
                <img src={sdg} alt=''/>   
              </div>
            </div>
          </div>
        </div>

        <div className='xs-12 sm-6 '>
          <div className='inner' id="text">
            <div className='c-w i-h'>
              <div className='c i-h'>
                <h3> Impact Measurement of Progress </h3>
                <p>The Sela Platform provides the tools to scale impact measurement and progress against the UN's SDGs in the emerging world: </p>
              
                <ul>
                  <li><span className='bar'/>Computer vision to analyze satellite and drone data</li>
                  <li><span className='bar'/>Real-time reporting of capital and resource deployment</li>
                  <li><span className='bar'/>Token incentivization of local stakeholders</li>
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
                <p>Human-centered design pilot</p>
              </div>


              <div className="sm-con offset">
                <h4>May 2018</h4>
                <p>Pilot test</p>
              </div>


              <div className="sm-con offset">
                <h4>March 2019</h4>
                <p>Begin Sustainability Int'l Niger Delta project</p>
              </div>


              <div className="sm-con offset">
                <h4>July 2019</h4>
                <p>Begin $350m E. Africa affordable housing project</p>
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
                <h4>April 2017</h4>
                <p>Company founded</p>
              </div>

              <div className="sm-con offset">
                <h4>March 2018</h4>
                <p>Sela platform MVP</p>
              </div>


              <div className="sm-con offset">
                <h4>Nov 2018</h4>
                <p>Beta release</p>
              </div>

          
              <div className="sm-con offset">
                <h4>June 2019</h4>
                <p>Utility token launch</p>
              </div>

            </div> 

          </div>
    
          <div className='xs-12 small'>

            <div className="txt xs-5 r">
              
              <div className="sm-con offset">
                <h4>Oct 2017</h4>
                <p>Human-centered design pilot</p>
              </div>

              <div className="sm-con offset">
                <h4>May 2018</h4>
                <p>Pilot test</p>
              </div>

              <div className="sm-con offset">
                <h4>March 2019</h4>
                <p>Begin Sustainability Int'l Niger Delta project</p>
              </div>

              <div className="sm-con offset">
                <h4>July 2019</h4>
                <p>Begin $350m E. Africa affordable housing project</p>
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
                <h4>March 2018</h4>
                <p>Sela platform MVP</p>
              </div>

              <div className="sm-con offset">
                <h4>Nov 2018</h4>
                <p>Beta release</p>
              </div>

              <div className="sm-con offset">
                <h4>June 2019</h4>
                <p>Utility token launch</p>
              </div>

            </div> 
          </div>
    
      </div>
    </div>

    <div className='xs-12' id='leadership'>
      <div className='xs-10 xs-off-1'>

            <h3 className="t-c"> Leadership </h3>
            <div className='xs-12'>

              { LeaderShipInfo.map((info,i)=>{
                return  <div className="xs-12 sm-6 md-3 x" key={i}>
                <div className="inner xs-12">
                  <img className="main" src={info.avatar}/>
                  <div className="xs-12" id='push-down'>
                    <div className="xs-9 f-l">
                      <h4>{info.name}</h4>
                      <p>{info.pos}</p>
                    </div>
                    
                    <div className="xs-3 f-r">
                      <NavLink to={info.link} className="linkicon">
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
                    <img src={post.data.thumbnail} alt=""/>
                    <h5>{post.data.title}</h5>
                    <p>{truncate( post.content )}</p>
                    <NavLink to={`/blog/post/${post.data.slug}`}>Read More</NavLink>
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
