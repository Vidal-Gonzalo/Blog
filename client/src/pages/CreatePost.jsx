import React, { useState } from "react";
import Axios from "axios";

export default function CreatePost() {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const submitPost = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/api/create", {
      userName: userName,
      title: title,
      text: text,
    });
  };

  return (
    <div className="createPost">
      <form className="uploadPost">
        <label>Nombre de usuario</label>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label>Título</label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Texto</label>
        <textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button onClick={submitPost} className="btn btn-primary">
          Enviar publicación
        </button>
      </form>
    </div>
  );
}
