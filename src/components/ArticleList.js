import React from "react";

function ArticleList(props) {
    const { articles } = props;
    return (
      <main>
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </main>
    );
}

export default ArticleList;
  
  