import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [user, setUser] = useState("")
  const [id, setId] = useState("")


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
      res => {
        if(res.status >= 400) {
          alert(`The ID ${id} does not exist`)
        }
        return res.json()
      }
    ).then(
      (res) => setUser(res)
    )
  }, [id])

  function handleChange(e) {
    const input = e.target.value;
    if(Number(input) || input === "" ) {
      setId(input);
  }
    };

  return (
    <div className="App">
      <input placeholder='Insert a number ID' onChange={handleChange} value={id}/>
       <div>
        <h1>{user.name}</h1>
        <p>{user.username}</p>
        <p>{user.phone}</p>
       </div>
    </div>
  )
}

export default App;
