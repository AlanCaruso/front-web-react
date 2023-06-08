import Blogs from "./Components/Blogs/Blogs"
import BlogPage from "./Components/BlogPage/BlogPage"
import { items } from "./data"
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Blogs posts={items.data} />}></Route>
        <Route path="blogs/:blogId" element={<BlogPage posts={items.data} />} />
      </Routes>
    </div>
  )
}

export default App
