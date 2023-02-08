import React from 'react'
import Item from "../Item/Item"
import { items } from "../../data"

function Blogs() {
    return (
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
                        <Item
                            id={i._id}
                            img={i.img}
                            email={i.creador.email}
                            title={i.titulo}
                            description={i.descripcion}
                            creatorImg={i.creador.img}
                            creatorName={i.creador.nombre}
                            itemKey={i._id}
                            key={i._id}

                        />
                    ))
                }

            </div>
        </section >
    )
}

export default Blogs