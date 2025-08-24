import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About.js"
import ArticleList from "./ ArticleList";
function App() {
  return (
    <div>
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

