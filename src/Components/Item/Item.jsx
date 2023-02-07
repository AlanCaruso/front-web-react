import React from 'react'

function Item(props) {

    return (
        <>

            <div key={props.id} className="xl:w-1/3 md:w-1/2 p-4">
                <a href={"/blogs/" + props.id}>
                    <div className="bg-white p-6 rounded-lg">
                        <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src={props.img} alt="Image Size 720x400" />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">{props.email}</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{props.title}</h2>
                        <p className="leading-relaxed text-base mb-4">{props.description}</p>
                        <div className="container">
                            <div className="row">
                                <div className="flex mt-3 col align-self-center align-items-center">
                                    <img alt="" src={props.creatorImg} className="h-10 w-10 rounded-full mr-2 object-cover" />
                                    <div>
                                        <p className="font-semibold text-gray-700 text-sm capitalize">{props.creatorName}</p>
                                        <p className="text-gray-600 text-xs text-left"> 14 Aug </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

        </>
    )
}

export default Item