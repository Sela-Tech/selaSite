import styled from 'styled-components';


export const W = styled.div`
  background: rgba(0, 0, 70, 0.8);

  height: 100vh;

  @media(min-width:767px){
    height: calc(100vh - 140px)!important ;
  }

  position: relative;
  overflow: hidden;

  z-index: 1;
  > div{

    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  video{
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.35;
    background-size: cover;
    object-fit:cover;

  }
  h1{
    font-weight: 500;
    font-family: Acumin Pro;
    line-height: 60px;
    font-size: 32px;
    letter-spacing: .25px;
    color: #FFFFFF;
  }

  p{
    font-weight: 100;
    margin: 1em 0 2em;
    font-family: Acumin Pro;
    line-height: 26.75px;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: .25px;


  }
  a{
    height: 45px;
    width: 150px;
    border: 0;
    font-size: 15px;
    color: white;
    border-radius: 2px;
    font-family: Acumin Pro;
    font-weight: 200;
    text-align: center;
    line-height: 45px;
    letter-spacing: .35px;
    padding: 0;
    text-decoration:none;
    display: inline-block;

  }

  #orange{
    background: linear-gradient(149.09deg, #C13C1E 0%, #F2994A 100%);
    box-shadow: 0px 2.5px 5px rgba(34, 40, 41, 0.15);
  }

  @media(max-width:767px){
    #deepblue, #orange{
      float: unset !important;
      margin: 5px 0;
    }
  }

  #deepblue{
  background: #FFFFFF;
  box-shadow: 0px 2.5px 5px rgba(34, 40, 41, 0.15);
  border-radius: 2px;
  color: #201D41;
  }
`;

export const WW = styled.div`

position: relative;

#imp{
  padding: 1.5em 0;

  img{
    height: 300px;
    width: 100%;
    object-fit: contain;
  }
  .inner{
    padding: 1em;

    &#text{
      margin-top: 1em;

      @media(min-width:768px){
        width: 90%;
      }
    }
  }


  .bar{
      width: 20px;
      height: 4px;
      background: linear-gradient(157.8deg, #C13C1E 0%, #F2994A 100%);
      border-radius: 10px;
      margin-right: 10px;
      display: inline-block;
      
  }

  h3{    
    font-family: Acumin Pro;
    line-height: 60px;
    font-size: 18px;
    font-weight: 500;
    color: #F2994A;
  }

p,li{
  font-weight: 300;
  font-size: 17px;  
}

  p{
    font-family: Acumin Pro;
    line-height: 28px;
    color: #222829;
    margin-bottom: 1.5em;
  }

  ul {
    list-style-type: none;

    li {
      display: block;
      font-family: Acumin Pro;
      line-height: 25px;
      color: #222829;
      margin: .4em 0;
    }
    
  }

}

#info{
  background: #FAFAFA;
  padding: 3em 0;

  .box{
      &:hover{
          transform:scale(1.05);
            transition: 400ms;
      }
  }
  .inner{
    margin: 1em 0;
    min-height: 425px;
    background: white;
    border-radius: 5px;
    padding: 1em ;

    h2{
      font-family: Acumin Pro;
      line-height: 18px;
      font-weight: 600;

      font-size: 12px;
      
      text-align: center;      
      color: #F2994A;
    }

    h5{
        line-height: 24px;
        font-size: 18.5px;
        font-weight: 400;
        margin: .25em 0;
       
      font-family: Acumin Pro;
      text-align: center;
      color: #222829;
    }
    
    p{ 
      padding: 1em 0;
      font-family: Acumin Pro;
      line-height: 24px;
      font-size: 14px;
      font-weight: 300;
      text-align: center;
      color: #222829;
    }
  }
}
@media(min-width: 768px){
  .inner{
    width: 95%;
  }
}

#map-side{
  padding:  3%;

  h2{
    font-weight: 600;
    margin-bottom: 15px;

    font-family: Acumin Pro;
    line-height: 60px;
    font-size: 24px;
    color: #000046;

  }

  p{
    font-weight: 200;
    font-family: Acumin Pro;
    line-height: 27px;
    font-size: 16px;
    color: #222829a8;
    margin: 1em 0;
  }


  img{
    width: 100%;
    object-fit: contain;
    margin: auto;
  }
}

#line{
  border-bottom: .5px solid #b1bad280;
  padding-top: 1.5em;
}

.icons{
  padding: 2.5em 0;

  @media(max-width: 767px){
    h3{
      padding-bottom: 1em;
    }
  }

  h3{
    margin: 0;
    font-family: Acumin Pro;
    line-height: 30px;
    font-size: 18px;
    text-align: center;
    color: #F2994A;
    font-weight: 500;
    position:relative;
    top: 12px;

  }

  img{
    object-fit: contain;
    width: 75%;
    height: 50px;
  }
  }


  #roadmap{
    padding: 3em 0;
    background: #FAFAFA;


  h3{    
    font-family: Acumin Pro;
    line-height: 60px;
    font-size: 21px;
    font-weight: 500;
    color: #F2994A;
  }

  @media(min-width: 768px){
    .small{
      display: none;
    }
  }

  @media(max-width: 768px){
    .big{
      display: none;
    }
    .small{
      display: block;
    }
    
      min-height: 1050px;
  }

  .big{

      .bar{
        height: 4px;
        background: #000046;
      }

      #middle{
        left: -9px;
        top: 11px;
        position: relative;
      }

      .sm-con {
        width: calc((100% - 100%/18)/8);
        float: left;

        &.first, &.offset{
          margin-bottom: 0em;
          margin-top: 2em;

          p{
            font-family: Acumin Pro;
            line-height: 20px;
            font-size: 14.5px;
            font-weight: 300;
            color: #222829;
          }

          h4{
            font-family: Acumin Pro;
            line-height: 21px;
            font-size: 13px;
            color: #222829;
            font-weight: 700;
          }
        }

        &.offset{
          margin-left: calc((100% - 100%/18)/8);
        }

        .sm{
          display: block;
          width: 20px;
          height: 20px;
          border: 0.5px solid #696F74;
          box-sizing: border-box;
          position: relative;
          border-radius: 40px;

          &::after{
            position: absolute;
            content: "";
            width: 12px;
            top: 15%;
            left: 18.5%;
            margin: auto;
            border-radius: 50%;
            height: 12px;  
            background: #F2994A;
            box-shadow: 0px 5px 5px rgba(242, 153, 74, 0.25), 0px -5px 5px rgba(242, 153, 74, 0.25);
          }
        }
      }
    }

    .small{
      .txt,#middle,.bar{
        height: 845px;
      }

      .bar{
        width: 4px;
        background: #000046;
        margin: auto;
        float: unset;
      }

      #middle{
        top: -9px;
        position: absolute;
        left: 0;
        right: 0;
        float: unset;
        margin: auto;
        width: 100%;
        text-align: center;
      }

      .sm-con {
        height: calc(100%/7);

        &.first, &.offset{
         
          p{
            font-family: Acumin Pro;
            line-height: 20px;
            font-size: 14.5px;
            font-weight: 300;
            color: #222829;
          }

          h4{
            font-family: Acumin Pro;
            line-height: 21px;
            font-size: 13px;
            color: #222829;
            font-weight: 700;
          }
        }

        &.offset{
          margin-top: calc(845px/7);
          top: -9px;
          position: relative;
        }

        .sm{
          display: block;
          width: 20px;
          height: 20px;
          border: 0.5px solid #696F74;
          box-sizing: border-box;
          position: relative;
          border-radius: 40px;
          margin:auto;

          &::after{
            position: absolute;
            content: "";
            width: 12px;
            top: 15%;
            left: 18.5%;
            margin: auto;
            border-radius: 50%;
            height: 12px;  
            background: #F2994A;
            box-shadow: 0px 5px 5px rgba(242, 153, 74, 0.25), 0px -5px 5px rgba(242, 153, 74, 0.25);
          }
        }
      }
    }
  }



#leadership{
  padding: 3em 0 ;
  background: white;

      h3{    
        font-family: Acumin Pro;
        line-height: 60px;
        font-size: 21px;
        font-weight: 500;
        color: #F2994A;
      }

  .x{
    margin-bottom: 1em;
    
      .inner{
        height: 340px;
        background: #FAFAFA;
        border-radius: 0px 0px 2px 2px;  
      }

      @media(min-width: 768px){
        .inner {
          width: 95%;
        }
      }

      img.main{
        height: 200px;
        width: 100%;
        object-fit: cover;
      }

      img{
        object-fit:cover;
      }
      
      h4{ 
        font-family: Acumin Pro;
        line-height: 24px;
        font-size: 17.5px;
        color: #363795;    
        font-weight: 500;    
        margin-bottom: 3px; 
      }
      
      p{
        font-family: Acumin Pro;
        line-height: 17px;
        font-weight: 300;
        font-size: 16px;
        color: #696F74;
      }
      
      #push-down{
        padding: 9%;
      }

      .linkicon{
        height: 50px;
        width: 50px;
        float: right;
        img{
          object-fit: contain;
          height: 25px;
          width: 25px;
          display: block;
          float: right;
        }
      }
  }
}

  #latest-posts{
    
    padding: 4em 0;    
    
    h3{
      padding: 1em 0;
      color: #363795;
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 1em;
    }

    background: #FAFAFA;

    .inner{
      @media(min-width:768px){
        width:95%;
      }    

      img{
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      h5{
        font-family: Acumin Pro;
        line-height: 30px;
        font-size: 15px;
        color: #222829;
        font-weight: 600;
        margin-top: 15px;
      }

      p{
        font-weight: 200;
        font-family: Acumin Pro;
        line-height: 24px;
        font-size: 14.5px;
        color: #696F74;
        padding: 7px 0;
      }

      a{
        font-weight:300;        
        font-family: Acumin Pro;
        line-height: 20px;
        font-size: 16px;
        color: #F2994A;
        text-decoration:none;
        
      }

    }
  }


  #contact-us{
    background: rgba(0, 0, 70, 0.8);
    border-radius: 2px;
    padding: 3em 0;

   
    h3{    
      font-family: Acumin Pro;
      line-height: 60px;
      font-size: 21px;
      font-weight: 500;
      color: #F2994A;
    }

    h4{
        font-family: Acumin Pro;
        line-height: 60px;
        font-size: 19.5px;
        letter-spacing: .5px;
        font-weight: 500;
        color: #F2994A;
    }

    input{
      background: #FFFFFF;
      border-radius: 2px;
      height: 45px;
      width: 100%;
      border: 0;
      font-size: 15px;
      padding: .5em 1em;
      margin: .5em 0;
      
      font-family: Acumin Pro;
      line-height: 22px;
      font-size: 16px;
      color: #696F74;


      &::placeholder{
        font-family: Acumin Pro;
        line-height: 22px;
        font-size: 16px;
        color: #696F74;  
      }


    }

    textarea{
      padding: .5em 1em;
      background: #FFFFFF;
      border-radius: 2px;
      min-height: 275px;
      font-size: 15px;
      border: 0;
      width: 100%;

      font-family: Acumin Pro;
      line-height: 22px;
      font-size: 16px;
      color: #696F74;
      
      &::placeholder{
        font-family: Acumin Pro;
        line-height: 22px;
        font-size: 16px;
        color: #696F74;  
      }

      @media(min-width:768px){
        width: 97.5%;
      }
      margin 1em 0;
    }

    button{
      width: 150px;
      height: 44px;
      background: linear-gradient(149.09deg, #C13C1E 0%, #F2994A 100%);
      box-shadow: 0px 2.5px 5px rgba(34, 40, 41, 0.15);
      border-radius: 2px;
      color: white;
      font-size: 14.5px;
      margin: 1em auto;
      border:0;
    }


    .bar{
        border: .75px solid #ffffff17;
        margin-top: 3em;

      }
    
}

  .sela{
      #email{
        height: 48px;
        background: #FFFFFF;
        border-radius: 2px 0px 0px 2px;        
      }

      #btn{
        color: white;
        height: 48px;
        background: linear-gradient(146.85deg, #C13C1E 0%, #F2994A 100%);
        box-shadow: 0px 2.5px 5px rgba(34, 40, 41, 0.15);
        border-radius: 0px 2px 2px 0px;
      }
  }



  .main-blog-page{
      padding: 5em 0 0;
  }
`;