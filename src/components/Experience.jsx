import React from 'react';
import react from '../assets/react.png';
import nodejs from '../assets/html.png';
import mongodb from '../assets/mongodb.png';
import frontend from '../assets/frontend.png';
import backend from '../assets/backend.png';
import wordpress from '../assets/wordpress.png';



const Experience = () => {

  const techs = [
    {
      id: 1,
      src: react,
      title:'React',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: nodejs,
      title:'NodeJs',
      style: 'shadow-orange-500'
    },
    {
      id: 3,
      src: mongodb,
      title:'MongoDB',
      style: 'shadow-orange-500'
    },
    {
      id: 4,
      src: frontend,
      title:'Front-End',
      style: 'shadow-orange-500'
    },{
      id: 5,
      src: backend,
      title:'Back-End',
      style: 'shadow-orange-500'
    },
    {
      id: 6,
      src: wordpress,
      title:'WordPress',
      style: 'shadow-orange-500'
    },
    
  ]
  return (
    <div name="experiemce" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        {
           techs.map(({id, src, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt='' className='w-20 mx-auto' />
            <p className='mt-4 '>{title}</p>
          </div>
           ))
        }

      
        </div>

      </div>
    </div>
  )
}

export default Experience;
