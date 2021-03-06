import React from 'react'
import { withRouteData, Head, NavLink } from 'react-static';
import { WW } from "../styles/blog";
import { truncate } from "../helpers/utils";
import moment from "moment";
import universal from "react-universal-component";
import LazyLoad from 'react-lazyload';

const Navbar = universal(import(`../shared-components/navbar`), {
  loading: () => null
});
// Navbar.preload();

const Blog = ( ({ posts })  => {
  return <React.Fragment>
  <Navbar isHomePage={false}/>
  <WW className="xs-12">
  <Head>
    <title> Sela Labs | Blog </title>
  </Head>

  <div className="main-blog-page xs-12">
  <div className="xs-12" id="latest-posts">
    <div className='xs-10 xs-off-1'>
      <div className='xs-12'>
        { posts.map(post => (
            <div className="xs-12 md-4 sm-6" key={post.data.slug}>
              <div className="inner">
                  <LazyLoad once height={200}><img src={post.data.thumbnail} alt={post.data.slug}/></LazyLoad>
                  <h5>{post.data.title}</h5>
                  <p>{truncate( post.content )}</p>
                  <NavLink to={`/single-post/${ moment(post.data.date).format("YYYY/MM/DD")}/${post.data.slug}`}>Read More</NavLink>
              </div>
          </div>
        ))}
        
      </div>
    </div>
  </div>
  </div>

</WW>  
  </React.Fragment>
});


let BlogPage = withRouteData(Blog);
export default BlogPage;
