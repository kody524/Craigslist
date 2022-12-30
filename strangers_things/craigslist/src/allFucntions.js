export async function deletePost(token, id) {
  try {
    const data = await fetch(
      `https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/posts/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await data.json();
    if (response.success) {
      alert("post deleted");
    }
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function createMessage(id, messageContent) {
  const token = localStorage.getItem("token");
  console.log(messageContent);
  try {
    const data = await fetch(
      `https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/posts/${id}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: `${messageContent}`,
          },
        }),
      }
    );
    const response = await data.json();
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}
export async function patch(title, price, location, description, token, ID) {
  try {
    console.log(ID);
    const data = await fetch(
      `http://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/posts/${ID}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            location: location,
          },
        }),
      }
    );
    const response = await data.json();
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}

export async function fetchLogin(username, password, setSuccess) {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      }
    );
    const json = await response.json();

    console.log(json);

    if (json.success) {
      setSuccess(true);
      console.log(json.data.token);
      localStorage.setItem("key", username);
      localStorage.setItem("token", json.data.token);
    } else {
      alert(json.error.message);
    }
  } catch (e) {
    console.log(e);
  }
}

export async function fetchPosts(token, setPosts) {
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/posts`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await response.json();
    console.log(json);
    setPosts(json.data.posts);
  } catch (e) {
    console.log(e);
  }
}
export async function fetchMe(token, setPosts, setMessages) {
  try {
    const data = await fetch(
      "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/users/me",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await data.json();

    setPosts(response.data.posts);
    console.log(response.data.posts)
    setMessages(response.data.messages);
    console.log(response.data.messages)
  } catch (e) {
    console.log(e);
  }
}
export async function PostUser(username, password, setSuccess) {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      }
    );

    const json = await response.json();
    const TOKENKEY = json.data.token;
    console.log(json);
    if (json.success) {
      setSuccess(true);
      localStorage.setItem("key", TOKENKEY);
    } else {
      alert(json.error.message);
    }
  } catch (e) {
    console.log(e);
  }
}
