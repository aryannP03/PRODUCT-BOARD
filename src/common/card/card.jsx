"use client"

import React from 'react'
import Image from 'next/image'

function Card( props) {
    return (
        <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition min-w-60 max-w-60 bg-gray-400">
            <div className="relative w-full h-48 mb-4">
                <Image
                src={props.image}
                alt={props.title}
                fill
                className="object-cover rounded-md"
                />
            </div>

            <h2 className="text-lg font-semibold mb-2">{props.title}</h2>

            <p className="text-gray-600 text-sm mb-3">
                {props.description}
            </p>

            <div className="flex justify-between items-center">
                <span className="text-xl font-bold">₹{props.price}</span>
            </div>
        </div>
    )
}

export default Card
