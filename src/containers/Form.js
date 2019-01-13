
import React from "react";
import Iframe from 'react-iframe'


export default  ()=>{
 return <React.Fragment>
      <nav/>
  <Iframe 
        url="https://docs.google.com/forms/d/e/1FAIpQLSdvHwdkz1wVvA5FfDGs99N1F81GSg3TAhVGT9ZOHFa31LsPRA/viewform" 
        width="100vw"
         height="100vh"
         id="myId"
         className="myClassname"
         display="initial"
         position="relative"
     />
</React.Fragment>

}
