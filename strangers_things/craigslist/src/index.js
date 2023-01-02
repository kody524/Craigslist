import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import Profile from "./Profile";
import Logout from "./Logout";
import { NotLoggedIn } from "./NotLoggedIn";

function Main() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [ID, setID] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [singlePost, setSinglePost] = useState(false);
  const [edit, setEdit] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const [reply, setReply] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              username={username}
              password={password}
              success={success}
              setSuccess={setSuccess}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          }
        ></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/posts"
          element={
            <Posts
              ID={ID}
              title={title}
              price={price}
              description={description}
              location={location}
              singlePost={singlePost}
              edit={edit}
              setEdit={setEdit}
              setSinglePost={setSinglePost}
              setID={setID}
              setTitle={setTitle}
              setPrice={setPrice}
              setDescription={setDescription}
              setLocation={setLocation}
              messageContent={messageContent}
              setMessageContent={setMessageContent}
              reply={reply}
            />
          }
        ></Route>
        <Route path="/create" element={<CreatePost />}></Route>
        <Route
          path="/profile"
          element={
            <Profile
              ID={ID}
              title={title}
              price={price}
              description={description}
              location={location}
              edit={edit}
              setEdit={setEdit}
              setKey={setID}
              setTitle={setTitle}
              setPrice={setPrice}
              setDescription={setDescription}
              setLocation={setLocation}
              singlePost={singlePost}
              setSinglePost={setSinglePost}
              setMessageContent={setMessageContent}
              messageContent={messageContent}
              reply={reply}
              setReply={setReply}
            />
          }
        ></Route>
        <Route
          path="/checkit"
          element={
            <NotLoggedIn
              ID={ID}
              title={title}
              price={price}
              description={description}
              location={location}
              singlePost={singlePost}
              setSinglePost={setSinglePost}
              setID={setID}
              setTitle={setTitle}
              setPrice={setPrice}
              setDescription={setDescription}
              setLocation={setLocation}
            />
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
