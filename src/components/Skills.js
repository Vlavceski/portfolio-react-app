import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Java from '../assets/java-logo.svg';
import Net from '../assets/.net.png';
import Angular from '../assets/angular.png';
import Postgres from '../assets/postgres.png';
import Mongo from '../assets/mongo.png';
import Docker from '../assets/docker.png';
import Python from '../assets/python.png';

function Skills() {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
  
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#2fadc6]'>Skills</p>
            <p className='py-4'> These are the technology I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 text-center py-8'>
           
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt='Html'/>
                <p className='my-4'>HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt='Css'/>
                <p className='my-4'>CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript'/>
                <p className='my-4'>JavaScript</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt='React'/>
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Postgres} alt='GitHub'/>
                <p className='my-4'>Postgres</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt='Node'/>
                <p className='my-4'>Node JS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mongo} alt='Mongodb'/>
                <p className='my-4'>MongoDB</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Java} alt='Firebase'/>
                <p className='my-4'>Java</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Net} alt='Skill 9'/>
                <p className='my-4'>.Net</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Angular} alt='Skill 10'/>
                <p className='my-4'>Angular</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Docker} alt='Skill 10'/>
                <p className='my-4'>Docker</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt='Skill 10'/>
                <p className='my-4'>Python</p>
            </div>
        </div>
    </div>
</div>
    )
}

export default Skills