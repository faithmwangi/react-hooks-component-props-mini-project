import React from "react";
import Header from "./Header";
import About from "./About";
import Article from "./Article";
import ArticleList from './ArticleList';
import blogData from "../data/blog";

console.log(blogData);

function App() {
  const blogName = "My Awesome Blog";
  const aboutText =
    "Welcome to my blog! Here, you'll find musings on a wide range of topics, including technology, travel, and lifestyle.";

  const articles = [
    {
      id: 1,
      title: "10 Tips for Traveling on a Budget",
      date: "April 15, 2023",
      preview:
        "Traveling can be expensive, but it doesn't have to break the bank. Check out these tips for budget-friendly travel.",
    },
    {
      id: 2,
      title: "The Future of AI in Healthcare",
      date: "April 13, 2023",
      preview:
        "Artificial intelligence is transforming the healthcare industry. Here's what you need to know about the latest developments.",
    },
    {
      id: 3,
      title: "Easy Ways to Incorporate Exercise into Your Daily Routine",
      date: "April 10, 2023",
      preview:
        "Staying active is important for both physical and mental health. Here are some simple ways to fit exercise into your busy day.",
    },
  ];

  return (
    <div className="App">
      <Header blogName={blogName} />
      <About image="https://www.example.com/logo.png" about={aboutText} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
