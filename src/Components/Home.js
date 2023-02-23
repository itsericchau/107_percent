import React, { useEffect, useState } from "react"
import axios from "axios"

function Home() {
  const [news, setNews] = useState({})

  const getNews = () => {
    return axios
      .get("https://youtube.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          channelId: "UCB_qr75-ydFVKSF9Dmo6izg",
          order: "relevance",
          maxResults: "4",
          q: "formula 1",
          type: "video",
          key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => res.data)
  }
  useEffect(() => {
    getNews().then((data) => setNews(data))
  }, [])

  return (
    <div className="home component">
      <h1>Latest Official F1 videos</h1>
      <div className="news">
        {news.items &&
          news.items.map((video, i) => (
            <div className="videos" key={i}>
              {/* <a
              href={"https://www.youtube.com/watch?v=" + video.id.videoId}
              target="_blank"
            >
              {"https://www.youtube.com/watch?v=" + video.id.videoId}
            </a> */}
              {/* <a
              href={"https://www.youtube.com/watch?v=" + video.id.videoId}
              target="_blank"
            > */}
              <img src={video.snippet.thumbnails.high.url} alt="" />
              {/* </a> */}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home
