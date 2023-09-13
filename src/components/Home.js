import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
// #0a192f
function Home() {
    function downloadCV() {
        const cvFilePath = '/CV.pdf';
        const anchor = document.createElement('a');
        anchor.href = cvFilePath;
        anchor.target = '_blank';
        anchor.download = 'CV.pdf';
        anchor.click();
    }
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f] '>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-[#4bcfc6]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Nikola Vlavcheski</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm Full Stack Developer</h2>
                <p className=' text-[#8892b0] py-4 max-w-[700px]'>I'm Full Stack Developer, a passionate
                    and versatile Full-stack developer with
                    a deep love for crafting clean, efficient,
                    and user-centric web applications. With a
                    strong foundation in both front-end and
                    back-end development, I bring creative
                    solutions to life while ensuring seamless
                    user experiences.</p>
                <div>
                    <Link to="work" smooth={true} duration={500}>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4bcfc6] hover:border-[#4bcfc6]' >
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                    <button onClick={downloadCV} className='text-white group border-2 px-6 py-3 my-6 flex items-center hover:bg-[#4bcfc6] hover:border-[#4bcfc6]' >
                        Resume

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home