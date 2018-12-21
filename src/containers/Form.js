
import React from "react";
import Iframe from 'react-iframe'


export default  ()=>{
 return <React.Fragment>
      <nav/>
  <Iframe 
 url="https://docs.google.com/forms/d/e/1FAIpQLSeb3sQFtYbQzHM3m3VU_9byeDnjwhG19gYUalJSFXpZIumI3Q/viewform"
         width="100vw"
         height="100vh"
         id="myId"
         className="myClassname"
         display="initial"
         position="relative"
     />
</React.Fragment>

}
