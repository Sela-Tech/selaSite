import styled from "styled-components";

// export const Fade = styled.div`
//   background: ${props => (props.showSideMenu ? "whitesmoke" : "transparent")};
//   height: calc(100vh - 90px);
//   transition: 150ms;
//   position: fixed;
//   right: 0;
//   left: 0;
//   top: 90px;
//   bottom: 0;
//   z-index: ${props => (props.showSideMenu ? "10" : "-10000")};
// `;

export default styled.nav`
  #logo-link {
    height: 100%;
    display: inline-block;
    width: auto;

    img{
      object-fit:contain;
      object-position:center;
    }
  }

  height: 90px;
  position: fixed;
  background: transparent;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1000;

  #right-menu {
    height: 90px;
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

    height: 90px;
  }

  img#logo {
    height: 66px;
    width: 105px;
    display: block;
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

    font-family: ProximaNova;

    font-weight: 100;
    font-size: 15px;
    color: white;

    cursor: pointer;
    text-decoration: none;
    width: 100%;
    text-align: center;
    color: white;
    display: block;
    position: relative;
    height: 40px;
    line-height: 40px;

    &:hover {
      color: #201D41;
    }

    span {
      padding: 0 1em;
    }
  }

  .sm {
    width: calc(100% / 6);
  }

  .btn {

background: linear-gradient(151.44deg, #C13C1E 0%, #F2994A 100%);
box-shadow: 0px 2.5px 5px rgba(34, 40, 41, 0.15);
border-radius: 5px;

    color: white;
    &:hover {
      color: #201D41 !important;
    }
  }

  @media (min-width: 1023px) {
    .btn {
      border-radius: 5px;
    }
  }
`;
