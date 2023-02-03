import { useState, useEffect } from 'react'
import Home from "./Pages/Home/Home"
import { getPosts } from "./Posts"
import Card from "./Card"
import './App.css'

function App() {
  const [post, setPost] = useState([])

  useEffect(() => {
    getPosts().then((data) => setPost(data.data))
  }, [])

  return (
    <div className="App">
      <h1>Welcome to admin blog</h1>
      <Home />
      {post.map(i => (
        <div key={i.titulo} className="max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
          <div id="header" className="flex">
            <img alt="mountain" className="w-45 rounded-md border-2 border-gray-300 w-300" src={i.img} />
            <div id="body" className="flex flex-col ml-5">
              <h4 id="name" className="text-xl font-semibold mb-2">{i.titulo}</h4>
              <p id="job" className="text-gray-800 mt-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="flex mt-5">
                <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                <p className="ml-3">John Doe</p>
              </div>
            </div>
          </div>
        </div>
      ))}


    </div>
  )
}

export default App
