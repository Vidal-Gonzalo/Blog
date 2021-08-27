import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Axios from "axios";

export default function MainPage() {
  const [postList, setPostList] = useState([]);
  let history = useHistory();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((data) => {
      setPostList(data.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="mainPage">
        <div className="postContainer">
          {postList.map((value, key) => {
            return (
              <div className="row">
                <div
                  className="post"
                  key={key}
                  onClick={() => {
                    history.push(`/post/${value.id}`);
                  }}
                >
                  <h1>{value.title}</h1>
                  <p>
                    {value.post_text.length > 500
                      ? value.post_text.substring(0, 500) + "..."
                      : value.post_text}
                  </p>
                  <h4>{value.user_name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
