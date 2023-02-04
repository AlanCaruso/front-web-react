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


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto max-w-7x1 flex flex-wrap -m-4">
          <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">News</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          {
            post.map(i => (
              <div key={i.titulo} className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-white p-6 rounded-lg">
                  <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src={i.img} alt="Image Size 720x400" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{i.creador.nombre}</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{i.titulo}</h2>
                  <p className="leading-relaxed text-base">{i.descripcion}</p>
                </div>
              </div>
            ))
          }

        </div>
      </section >
    </div>
  )
}

export default App
