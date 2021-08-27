import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

export default function Post() {
  const [post, setPost] = useState({});
  let { postId } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/getFromId/${postId}`).then((data) => {
      console.log(data.data);
      setPost({
        title: data.data[0].title,
        post_text: data.data[0].post_text,
        user_name: data.data[0].user_name,
      });
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="wrapIndividualPost">
          <div className="individualPost">
            <h1>{post.title}</h1>
            <p>{post.post_text}</p>
            <h4>{post.user_name}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
