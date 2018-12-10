import React from 'react'
import { withRouteData, Head, Link } from 'react-static';
import { WW } from "../styles/post";
import universal from "react-universal-component";

import Moment from 'react-moment'
import Markdown from 'react-markdown'

const Navbar = universal(import(`../shared-components/navbar`), {
  loading: () => null
});

const Post = ( ({ post })  => {
  return <React.Fragment>
  <Navbar isHomeScreen={false}/>
  <WW className="xs-12">
  <Head>
    <title> Sela Labs | {post.data.title} </title>
  </Head>

  <div className="main-post-page xs-12">
  <div className="blog-post xs-10 xs-off-1">
    <Link id='back' to="/blog/">{'<'} Back</Link>
    <br />
  
    <div className='xs-12 t-c'>
    <div className='intro-txt'>
        <h3>{post.data.title}</h3>
        <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
      </div>
     
      <div className='xs-12 sm-10 sm-off-1 md-8 md-off-2'>
        <img className="image" src={post.data.thumbnail} alt="" />
      </div>
      
      
    </div>
    
    <div className='xs-12 space'>
    <div className='xs-12 sm-10 sm-off-1 md-8 md-off-2'>
        <Markdown source={post.content} 
        escapeHtml={false} />
      </div>
    </div>
    
  </div>
  </div>
</WW>  
  </React.Fragment>
});


let PostPage = withRouteData(Post);
export default PostPage;
