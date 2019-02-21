const fs = require("fs");
const klaw = require("klaw");
const path = require("path");
const matter = require("gray-matter");
const moment = require("moment");

import { ServerStyleSheet } from "styled-components";
import React, { Component } from "react";

function getPosts() {
  const items = [];
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () =>
    new Promise(resolve => {
      // Check if posts directory exists //
      if (fs.existsSync("./src/posts")) {
        klaw("./src/posts")
          .on("data", item => {
            // Filter function to retrieve .md files //
            if (path.extname(item.path) === ".md") {
              // If markdown file, read contents //
              const data = fs.readFileSync(item.path, "utf8");
              // Convert to frontmatter object and markdown content //
              const dataObj = matter(data);
              // Create slug for URL //
              dataObj.data.slug = dataObj.data.title
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
              // Remove unused key //
              delete dataObj.orig;
              // Push object into items array //
              items.push(dataObj);
            }
          })
          .on("error", e => {
            console.log(e);
          })
          .on("end", () => {
            // Resolve promise for async getRoutes request //
            // posts = items for below routes //
            resolve(items);
          });
      } else {
        // If src/posts directory doesn't exist, return items as empty array //
        resolve(items);
      }
    });
  return getFiles();
}

export default {
  extractCssChunks: true,
  inlineCss: true,
  siteRoot: "https://sela-labs.co/",
  webpack: (config, { stage }) => {
    if (stage === "prod") {
      config.entry = ["babel-polyfill", config.entry];
    } else if (stage === "dev") {
      config.entry = ["babel-polyfill", ...config.entry];
    }
    
    return config;
  },
  getSiteData: () => ({
    siteTitle: "Sela Labs | Impact Project Verification Platform"
  }),
  getRoutes: async () => {

    const posts = await getPosts();

    const sorted_by_date = posts.sort(function (left, right) {
      return moment.utc(right.data.date).diff(moment.utc(left.data.date))
    });

    // const reversed = posts.reverse();
    return [
      {
        is404: true,
        component: 'src/containers/404',
      },
      {
        path:"/apply",
        component: "src/containers/Form.js"
      },
      {
        path: "/",
        component: "src/containers/Home",
        getData: () => ({
          posts: sorted_by_date.filter((v,i)=>{
            return i <= 2
          })
        })
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts: sorted_by_date
        })
      },
      {
        path: '/',
        component: 'src/containers/Blog',
        getData: () => ({
          posts: sorted_by_date
        }),
        children: sorted_by_date
        .map(post => {
          return {
            path: `/single-post/${ moment(post.data.date).format("YYYY/MM/DD")}/${post.data.slug}`,
            component: 'src/containers/Post',
            getData: () => ({
              post
            })
          }
        })
      }
    ]
  },
  renderToHtml: async (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    // The styles are collected from each page component
    const html = render(sheet.collectStyles(<Comp />));
    // The collected page styles are stored in `meta`
    meta.styleTags = sheet.getStyleElement();
    // Return the html string for the page
    return html;
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;
      return (
        <Html>
          <Head>
         
          <meta httpEquiv="cache-control" content="public" max-age='86400'/>

          <link rel="stylesheet" type="text/css" href="/global.css"/>
          <link rel="stylesheet" type="text/css" href="/myGrid.css"/>

          <meta charSet="UTF-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />

          <title>Sela Labs | Impact Project Verification Platform</title>
         
          <meta name="title" content="Sela Labs | Impact Project Verification Platform"/>
         
          <meta name="description" content="Sela is a platform that enables transparent execution and measurement for sustainable development goals, eliminating traditional barriers of entry for capital into the emerging world."/>


          <meta property="og:type" content="website"/>
          
          <meta property="og:url" content="https://sela-labs.co/"/>
          
          <meta property="og:title" content="Sela Labs | Impact Project Verification Platform"/>
          
          <meta property="og:description" content="Sela is a platform that enables transparent execution and measurement for sustainable development goals, eliminating traditional barriers of entry for capital into the emerging world."/>
          
          <meta property="og:image"  content="/preview.png"/>

          <meta name="image"  content="/preview.png"/>

          <meta property="twitter:card" content="/preview.png"/>
          
          <meta property="twitter:url" content="https://sela-labs.co/"/>
          
          <meta property="twitter:title" content="Sela Labs | Impact Project Verification Platform"/>
          
          <meta property="twitter:description" content="Sela is a platform that enables transparent execution and measurement for sustainable development goals, eliminating traditional barriers of entry for capital into the emerging world."/>
          
          <meta property="twitter:image" content="/preview.png"/>

          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>

          <link rel="icon" href="/favicon.png" type="image/x-icon"/>

          {renderMeta.styleTags}

          {/* <noscript id="deferred-styles"> */}
            <link rel="stylesheet" type="text/css" href="https://sela-tech.github.io/assets/fonts/stylesheet.css"/>
          {/* </noscript> */}
          
          {/* <script async src="./load-fonts.js"	/> */}

          </Head>
          <Body>
        
          <div className="blanket">
            <div className='c-w i-h'>
              <div className="c i-h t-c">
              <div className="loader"/>
              </div>
            </div>
          </div>

          {children}

          </Body>

          <script async defer src= "/full-story.js" />
          <script async defer src="https://www.googletagmanager.com/gtag/js?id=UA-118972615-1"></script>
          <script async defer src= "/google-analytics.js" />

        </Html>
      );
    }
  }
};
