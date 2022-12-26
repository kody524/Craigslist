 export async function deletePost(token,id) {
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
      if(response.success){
        alert("post deleted")
      }
      return response
    } catch (e) {
      console.log(e);
    }
  }

  export async function createMessage(id,messageContent){
    const token = localStorage.getItem('token')
    console.log(messageContent)
try{
  const data = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/posts/${id}/messages`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      message: {
        content: `${messageContent}`
      }
    })

  })
      const response = await data.json()
      console.log(response)
    }catch(e){
      console.log(e)
    
}
}
  