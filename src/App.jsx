import Home from "./Pages/Home/Home"
import { Routes, Route, useParams } from 'react-router-dom';
import './App.css'

function App() {
  const params = useParams()

  console.log(params)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
