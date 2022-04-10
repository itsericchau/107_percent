import React, { useEffect, useState } from "react"
import axios from "axios"

function Home() {
  const [news, setNews] = useState({})

  const getNews = () => {
    return axios
      .get("https://newsapi.org/v2/everything", {
        params: {
          q: "f1 formula one 1",
          sortBy: "publishedAt",
          language: "en",
          apiKey: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => res.data)
  }
  useEffect(() => {
    getNews().then((data) => setNews(data))
  }, [])

  return (
    <div className="news component">
      {news.articles &&
        news.articles.map((article, i) => (
          <div className="articles" key={i}>
            <p>{article.title}</p>
            <p>{article.content}</p>
            <p>
              {article.source.name} |  {article.author}
            </p>
            <a href={article.url}>{article.url}</a>
            <br />
            <img src={article.urlToImage} alt="" />
          </div>
        ))}
    </div>
  )
}

export default Home
