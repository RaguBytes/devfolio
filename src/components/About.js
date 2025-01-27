/* eslint-disable jsx-a11y/alt-text */
import AboutImage from '../assets/about.png'

export default function About() {

    const config = {
        description_line1: 'Hi, My name is Ragu. I am a Front-end developer. I build websites with React.js and Tailwind CSS.',
        description_line2: 'Hi, Im proficient in Frontend skills like React.js, Redux, Tailwind CSS, Javascript, HTML, CSS3 and many more.',
        description_line3: 'In backend I know Node.js, Express.j and Mongo DB.',
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5 id' id='about'> 
        <div className='py-5 md:w-1/2'>
            <img src={AboutImage} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.description_line1}</p>
                <p className='pb-5'>{config.description_line2}</p>
                <p className='pb-5'>{config.description_line3}</p>
            </div>
        </div>
    </section>
}