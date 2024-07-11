import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20 '>
        I am an Information Technology expert with more than 6 years of increasing Software and 
        Website Development and Web App, Cybersecurity, database management and social media 
        marketing experience. I am a self-motivated, highly organized individual capable of 
        multitasking and seeking to utilize my knowledge, experience, skills and competence to help 
        this institution to the best of my ability
        </p>

        <br />

        <p className='text-xl'>
        I am committed to professional and personal development, capable of communicating with 
        all levels of organizational management and proficient in working under pressure with an 
        optimistic attitude.
        </p>
      </div>
    </div>
  )
}

export default About
