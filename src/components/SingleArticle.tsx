import React from "react";
import { ArticleInterface } from "../interfaces/Article";

interface SingleArticleProps {
  article: ArticleInterface;
}

const SingleArticle: React.FC<SingleArticleProps> = ({ article }) => {
  return (
    <div className="single-article">
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      <p>Published at: {article.published_at}</p>
      <p>News site: {article.news_site}</p>
    </div>
  );
};

export default SingleArticle;
