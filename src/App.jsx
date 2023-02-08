import Home from "./Pages/Home/Home"
import Blogs from "./Components/Blogs/Blogs"
import BlogPage from "./Components/BlogPage/BlogPage"
import { getPosts } from "./Posts"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getPosts().then((data) => setPosts(data.data))

  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Blogs />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="blogs/:blogId" element={<BlogPage posts={posts} />} />
      </Routes>
    </div>
  )
}

export default App
