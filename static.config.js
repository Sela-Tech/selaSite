const fs = require("fs");
const klaw = require("klaw");
const path = require("path");
const matter = require("gray-matter");

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

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
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
    siteTitle: "Sela Labs | Blockchain Verification Platform"
  }),
  getRoutes: async () => {

    const posts = await getPosts();
    const reversed = posts.reverse();
    return [
      {
        path: "/",
        component: "src/containers/Home",
        getData: () => ({
          posts
        })
      },
   
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: reversed.map(post => ({
          path: `/post/${post.data.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
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
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />

            <link rel='stylesheet' href="https://sela-tech.github.io/assets/fonts/stylesheet.css"/>

            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
            <link rel="icon" href="/favicon.png" type="image/x-icon"/>

            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  }
};
