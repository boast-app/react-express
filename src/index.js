import { render } from "react-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [message, setMessage] = useState('aa')
  useEffect(() => {
    axios.get("/api")
    .then(res => {
      setMessage(res.data.message)
    })
  }, [])
  return (
    <div className="App">
      <h1>フロントエンド</h1>
      <p>{message}</p>
    </div>
  )
}

render(<App />, document.getElementById("root"))