import React, { useEffect, useState } from "react";
import { ArticleInterface } from "../interfaces/Article";
import SingleArticle from "./SingleArticle";
import { Container } from "react-bootstrap";

const AllTheArticles: React.FC = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data.results);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Container fluid>
      {articles.map((article) => (
        <SingleArticle key={article.id} article={article} />
      ))}
    </Container>
  );
};

export default AllTheArticles;
