import styled from "styled-components";

let count = 6;
let linkheight = 68;
let totalheight = count * linkheight;
let borderColor = "#f7f7f7";
const orange = "#F2994A";
const black = "#222829";

export default styled.div`
  position: fixed;
  right: 0;
  top: 100px;
  bottom: 0;
  z-index: ${props => (props.showSideMenu ? "11" : "-10000")};
  height: ${props => (props.showSideMenu ? "auto" : "0")};

  #small-screen-nav {
    position: relative;
    transition: 450ms;
    height: ${props => (props.showSideMenu ? `${totalheight}px` : "0%")};
    background: white;
    overflow: hidden;
    border-color: ${borderColor};
    ${props =>
      props.showSideMenu &&
      `
    box-shadow: 0px 9px 24px -8px #232323;
    border-top: 1px solid ${borderColor};
    `};

    li {
      display: block;
      & + li {
        border-top: 1px solid ${borderColor};
      }
      a {
        height: ${linkheight}px;
        line-height: ${linkheight}px;
        display: block;
        color: ${orange};
        width: 100%;

        &:hover{
          color: ${black};
        }
      }

      .btn{
        color: white !important;

        &:hover{
          color: #fcfcfc !important;
        }
      }
    }
  }
`;
