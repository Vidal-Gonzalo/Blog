import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function MainPage() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((data) => {
      setPostList(data.data);
    });
  }, []);

  return (
    <div className="mainPage">
      <div className="postContainer">
        {postList.map((value, key) => {
          return (
            <div className="post">
              <h1>{value.title}</h1>
              <p>{value.post_text}</p>
              <h4>{value.user_name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
