import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [friends, setFriend] = useState([])
  const [picture, setPicture] = useState("")
  const [name, setName] = useState("")

useEffect(() => {
  axios.get('/api/friends')
    .then((response) => {
      setFriend(response.data)
    });
}, [])

  function addFriend(){
    setFriend([...friends, {picture, name}])
    setPicture('')
    setName('')
  }

  const friendInfo = friends.map((friend) => {
    return (
      <div key={friend.name}>
        <img src={friend.picture} height={'100px'} width={'100px'}/>
        <span>{friend.name}</span>
      </div>
    )
  } )

  return (
    <div>
      <label>Picture:</label>
      <input id="picture" value={picture} type="text" onChange={(e) => setPicture(e.target.value)}/>
      
      <label>Name</label>
      <input id="name" value={name} type="text" onChange={(e) => setName(e.target.value)}/>
      
      
      <button onClick={addFriend}> Add Friend</button>

      <div>{ friendInfo }</div>
    </div>
  )
}
