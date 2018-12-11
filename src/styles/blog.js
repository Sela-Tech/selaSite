import styled from 'styled-components';


export const WW = styled.div`

position: relative;
height: 100%;
min-height: calc(100vh - 100px);

.main-blog-page{
    padding: 100px 0 0;
    height: 100%;
}
  #latest-posts{
    height: 100%;
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

`;