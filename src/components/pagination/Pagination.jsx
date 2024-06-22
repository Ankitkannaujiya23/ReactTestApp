import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'




const Pagination = ({currentPage,  onPageChange}) => {

 

    return (
        <div className="flex items-center justify-end border-t border-gray-200  px-4 py-3 sm:px-6">
         
          <div className="hidden justify-end sm:flex sm:flex-1 sm:items-center sm:justify-end">
          
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
               
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                <a
                  aria-current="page"
                  className={`${ currentPage ===1 ? "bg-indigo-600 text-white":"text-black"} relative z-10 inline-flex  items-center  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ring-1 ring-inset ring-gray-300`}
                  onClick={()=> onPageChange(1)}
                >
                  1
                </a>
                <a
                  aria-current="page"
                  className={`${ currentPage ===2 ? "bg-indigo-600 text-white":"text-black"} relative z-10 inline-flex  items-center  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ring-1 ring-inset ring-gray-300`}
                  onClick={()=> onPageChange(2)}
                >
                  2
                </a>
              </nav>
            </div>
          </div>
        </div>
      )
}

export default Pagination