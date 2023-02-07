import Home from "./Pages/Home/Home"
import Blogs from "./Components/Blogs/Blogs"
import BlogPage from "./Components/BlogPage/BlogPage"
import { Routes, Route, useParams } from 'react-router-dom';
import './App.css'

function App() {
  const params = useParams()

  console.log(params)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="blogs" element={<Blogs />}></Route>
        <Route path="blogs/:_id" element={<BlogPage />} />
      </Routes>
    </div>
  )
}

export default App
