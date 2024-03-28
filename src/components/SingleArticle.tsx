import React from "react";
import { ArticleInterface } from "../interfaces/Article";
import { Col, Row } from "react-bootstrap";

interface SingleArticleProps {
  article: ArticleInterface;
}

const SingleArticle: React.FC<SingleArticleProps> = ({ article }) => {
  const publishedDate = article.published_at.split("T")[0];

  return (
    <a href={article.url} className="text-decoration-none">
      <Row className="py-2 text-black">
        <Col xs={4}>
          <img src={article.image_url} alt="Article Image" className="img-fluid" />
        </Col>
        <Col xs={8}>
          <h2 className="fw-bold">{article.title}</h2>
          <p>{article.summary}</p>
          <p className="fw-bold">{publishedDate}</p>
          <p>News from: {article.news_site}</p>
        </Col>
      </Row>
    </a>
  );
};

export default SingleArticle;
