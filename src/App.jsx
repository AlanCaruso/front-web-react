import Home from "./Pages/Home/Home"
import Blogs from "./Components/Blogs/Blogs"
import BlogPage from "./Components/BlogPage/BlogPage"
import { items } from "./data"
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="blogs/:blogId" element={<BlogPage blogs={items} />} />
      </Routes>
    </div>
  )
}

export default App
