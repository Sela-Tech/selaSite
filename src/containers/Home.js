import React from 'react';
import { withSiteData } from 'react-static';
import styled from 'styled-components';
import building from "../assets/building.png";
import map from '../assets/map.png';

const WW = styled.div`
#map-side{
  padding:  3%;

  h2{
font-family: ProximaNova;
line-height: 36px;
font-size: 30px;
color: #F2994A;
font-weight: 300;
margin-bottom: 15px;

}

  p{
font-weight: 300;
font-family: ProximaNova;
line-height: 27px;
font-size: 17px;
color: #222829;

  }


  img{
    width: 100%;
    object-fit: contain;
    margin: auto;
  }
}
`;

const W = styled.div`
background: linear-gradient(136.91deg, rgba(11, 8, 157, 0.95) 0%, rgba(242, 153, 74, 0.95) 100%);
height: 525px;
position: relative;
z-index: 1;
> div{
  position: relative;
  z-index: 1;  
}
&::before{
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background:url( ${building} );
  height: 100%;
  width: 100%;
  opacity: 0.05;
  background-size: cover;
  background-position: center;

}
h1{
  font-family: ProximaNova;
  line-height: 60px;
  font-size: 45px;
  font-weight: 300;
  margin: 1em 0;
  text-align: center;
  color: #FFFFFF;
}

p{
  font-family: ProximaNova;
  line-height: 29px;
  font-size: 20px;
  font-weight: 100;
  text-align: center;
  color: rgba(255,255,255,0.75);
  margin: 1em 0;
}
button{
  height: 60px;
  width: 175px;
  border: 0;
  font-size: 15px;
  color: white;
}

#orange{
  background: linear-gradient(150.9deg, #C13C1E 0%, #F2994A 100%);
  box-shadow: 0px 2.5px 5px rgba(34, 40, 41, 0.15);
  border-radius: 5px;
}


@media(min-width: 768px){
  #deepblue{
    margin-left: 15px;
  }  

  #orange{
    margin-right: 15px;    
  }
}

@media(max-width:767px){
  #deepblue, #orange{
    float: unset !important;
    margin: 5px 0;
  }
}

#deepblue{
  background: #201D41;
  box-shadow: 0px 2.5px 5px rgba(34, 40, 41, 0.15);
  border-radius: 5px;
}
`;


export default withSiteData(({posts}) => (
  <WW className="xs-12">
  <W className="xs-12">
  <div className="xs-10 xs-off-1 sm-8 sm-off-2 md-6 md-off-3 i-h">
    <div className="c-w i-h">
      <div className="c t-c i-h">
        
        <h1> Build The Future </h1>
        
        <p> Sela is an impact investment network powered by blockchain and artificial intelligence. Sela provides the tools to scale impact investment in the emerging world.  </p>
        
        <div className='xs-12'>
              <div className="xs-12 sm-6">
                <button id="orange" className="f-r"> Get Started </button>
              </div>
              <div className="xs-12 sm-6">
                <button id="deepblue" className="f-l"> Get Whitepaper </button>
              </div>
        </div>

      </div>
    </div>
    </div>
  </W>

  <div className="xs-12" id="map-side">
    <div className="xs-10 xs-off-1">
      <div className="xs-12 sm-6 ">
      <div className="xs-12 sm-11">
        <h2>About Sela</h2>
        <p>
        The emerging world, specifically Africa, is the future. By 2050, Africa's population is projected to become 2.5 billion people. Lack of trust, leadership, and community has led to costly capital that can't sustain. 

Sela is eliminating traditional barriers of entry for capital into the emerging world. Sela introduces trust and transparency into transactions by tracking capital flows and rewarding trustworthy behavior.
        </p>
        </div>
      </div>
      <div className="xs-12 sm-6 t-c">
        <img src={map} alt=""/>
      </div>
      
    </div>
  </div>
  </WW>
))
