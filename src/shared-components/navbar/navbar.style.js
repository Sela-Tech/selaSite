import styled from "styled-components";

const height = "100px";
const black = "#222829";
const orange = "#F2994A";

export default styled.nav`
  @media(min-width: 768px){
    #sm-margin{
      margin-top: 7.5px;
    }
  }

  #logo-link {
    display: inline-block;
    width: auto;

    img{
      object-fit:contain;
      object-position:center;
      height: 50px;
    }
  }

  height: ${height};
  position: fixed;
  background: ${props => props.scrolledFromTop ? `white`:
  props=>props.showSideMenu ? `white`: `transparent`
};
  
  box-shadow:${props=> props.scrolledFromTop ? `
  0 0 1px 0px #fff0e8`:`none`};
  
  left: 0;
  right: 0;
  transition : 250ms;
  top: 0;
  width: 100%;
  z-index: 1000;

  #right-menu {
    height: ${height};
  }

  #right-menu .inner > li,
  .small-screen {
    display: inline-block;
    line-height: 60px;
    position: relative;
  }

  #logo-li {
    display: inline-block;
    position: relative;

    height: ${height};
  }

  img#logo {
    display: block;
    object-fit: contain;
  }

  #hamburger {
    display: block;
    background: transparent;
    border: 0;
    height: 60px;
    span {
      height: 4px;
      width: 30px;
      background: gray;
      border-radius: 6px;
      margin: 4px 0;
      display: block;

      &:nth-child(2) {
        width: 20px;
      }
    }
  }

  

  li > a,
  #profile-menu {
    font-family: Acumin Pro;
    font-weight: 200;
    font-size: 14.5px;
    letter-spacing: .5px;
    ${props => props.scrolledFromTop ? `
    color: ${black};
    &:hover: {
      color: #999;
    }
    `:`
    color: white;
    `}
    &:hover{
      color: ${orange};
    }
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    text-align: center;
    display: block;
    position: relative;
    height: 40px;
    line-height: 44px;


    span {
      padding: 0 1em;
    }
  }

  .sm {
    width: calc(100% / 6);
  }

  .btn {
    background: linear-gradient(149.09deg, #C13C1E 0%, #F2994A 100%);
    box-shadow: 0px 2.5px 5px rgba(34, 40, 41, 0.15);
    border-radius: 2px;
    color: white;
    &:hover {
      color: ${black} !important;
    }
  }

  @media (min-width: 1023px) {
    .btn {
      border-radius: 5px;
    }
  }
`;
