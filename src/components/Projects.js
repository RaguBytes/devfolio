/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import websiteImg1 from '../assets/ecommerce-websites.jpg'
import websiteImg2 from '../assets/food-ecommerce.jpg'
import websiteImg3 from '../assets/website-blog.jpg'
import websiteImg4 from '../assets/MovieHut.png'

export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg4,
                description: 'Movie Application, Build a Movie Database App with React, Bootstrap & TMDb API',
                link: 'https://github.com/RaguBytes/moviehut',
            },
            {
                image: websiteImg1,
                description: 'A Ecommerce Website, Built with MERN Stack',
                link: 'https://github.com/ragubytes/cart',
            },
            {
                image: websiteImg2,
                description: 'Food Ecommerce websiute like Swiggy, Build with Angular and .Net',
                link: 'https://github.com/ragubytes/food',
            },
            {
                image: websiteImg3,
                description: 'Basic Blog Website, Build with Next JS and Mongo DB',
                link: 'https://github.com/ragubytes/blog',
            }
        ]
    }

    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>
        <div className="w-full">
            <div className="flex flex-col px-10">
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
                <p className=''>These are my projects, I have build these with React, MERN, Bootstrap, APIs and Tailwind CSS.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 py-5 gap-5'>
                {
                    config.projects.map((project) => (
                        <a href={project.link} target="_blank">
                            <div className='relative'>
                                <img className='h-[250px] w-[500px]' src={project.image} /> 
                                <div className='project-desc'> 
                                    <p className='text-center px-5 py-5'>{project.description}</p>
                                    <div className='flex justify-center'>
                                        <a className='btn' target='_blank' href={project.link}>View Project</a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))
                }
                
            </div>
        </div>
    </section>
}