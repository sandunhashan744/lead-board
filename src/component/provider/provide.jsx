import React from 'react';
import { FaSignal } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const provide = ( { provider } ) => {
  return (
    <>
    <div className="max-w-sm p-6 bg-white border border-gray-200 
    rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='flex'>
            <img class="w-16 h-16 mb-3 rounded-full shadow-lg" src={provider.image} alt="Bonnie image"/>
            <a href="">
                <h5 className="ml-3 mt-3 text-xl md:text-2xl font-bold tracking-tight
                text-gray-900 dark:text-white">{provider.name}</h5>
            </a>
            
        </div>

        <div className='flex'>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mr-5">
            subscribers  <samp>: </samp>
            {provider.acuracy}
        </p>
        <div className='flex '>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Accuracy  <samp>: </samp></p>
            <FaSignal className='w-5 h-5 ml-2 text-green-500 ' />
        </div>
        </div>
        
        <Link to={'/subscribe'} className="inline-flex items-center px-3 py-2 text-sm font-medium 
        text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
        focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
        dark:focus:ring-blue-800">
            Subscribe Now
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    </div>
    </>
  )
}

export default provide