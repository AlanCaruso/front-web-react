import React from 'react'
import { items } from "../../data"

function Card() {


    return (
        <>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto max-w-7x1 flex flex-wrap -m-4">
                    <div className="flex flex-wrap w-full mb-4 p-4">
                        <div className="w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">News</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>

                    {
                        items.data.map(i => (

                            <div key={i._id} className="xl:w-1/3 md:w-1/2 p-4">
                                <a href={"/blog/" + i.creador._id}>
                                    <div className="bg-white p-6 rounded-lg">
                                        <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src={i.img} alt="Image Size 720x400" />
                                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">{i.creador.email}</h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{i.titulo}</h2>
                                        <p className="leading-relaxed text-base mb-4">{i.descripcion}</p>
                                        <div className="container">
                                            <div className="row">
                                                <div className="flex mt-3 col align-self-center align-items-center">
                                                    <img alt="" src={i.creador.img} className="h-10 w-10 rounded-full mr-2 object-cover" />
                                                    <div>
                                                        <p className="font-semibold text-gray-700 text-sm capitalize">{i.creador.nombre}</p>
                                                        <p className="text-gray-600 text-xs text-left"> 14 Aug </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }

                </div>
            </section >

        </>
    )
}

export default Card