import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Header from './Header'



export default function Product(item: any) {

  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 w-full bg-gray-800 bg-opacity-40 p-6 rounded-lg mx-6">
        <Link className="block relative h-96 rounded overflow-hidden" href={"/"}>
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.image} width={400} height={400} />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-200 text-lg tracking-widest title-font mb-1">{item.cat}</h3>
          <h2 className="text-white title-font text-3xl font-medium mb-2">{item.name}</h2>
          <p className="mt-1 text-gray-100 text-xl">{"$ " + item.price}</p>
          <Link href={"/product/"+item.slug}><button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button></Link>
        </div>
      </div>
    </>

  )
}





