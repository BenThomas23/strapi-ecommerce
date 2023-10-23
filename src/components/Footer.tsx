import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div><footer id="page-footer" className=" fixed bottom-0 flex items-center bg-white dark:bg-gray-800 min-w-full min-h-[50px]">
    <div className="text-center flex flex-col md:text-left md:flex-row md:justify-between container mx-auto px-4 lg:px-8 text-xl">
      <div className="pt-4 pb-1 md:pb-4 text-white ">
        <Link href="https://benthomas.vercel.com" className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300" target="_blank">Ben Thomas</Link> ©
      </div>
      <div className="pb-4 pt-1 md:pt-4 inline-flex items-center justify-center text-white">
        <span className='text-black text-sm'>Crafted with</span>
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="mx-1 text-red-600 hi-solid hi-heart inline-block w-4 h-4"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
        <span> by <Link href="https://benthomas.vercel.com" className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300" target="_blank">Ben Thomas</Link></span>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer