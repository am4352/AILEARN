import React from 'react'

const Navbar = () => {
  return (
      <nav className='bg-blue-600 text-white p-4'>
          <div className='flex justify-between items-center'>
              <h1 className='text-2xl'>AiCADEMY</h1>
              <ul className='flex space-x-5'>
                  <li className='hover:bg-blue-700'>
                      Home
                  </li>
                  <li>
                      About
                  </li>
                  <li>
                      Courses
                  </li>
                  <li>
                      Contact
                  </li>

              </ul>


          </div>

      </nav>
  )
}

export default Navbar