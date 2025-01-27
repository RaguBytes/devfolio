/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import HeroImage from '../assets/hero.png';
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {

    const config = {
        subTitle: 'Im a Front-end developer',
        social: {
            twitter: 'https://x.com/RaguBytes',
            linkedin: 'https://www.linkedin.com/in/raguraman-nagarajan/',
            facebook: 'https://www.facebook.com/ragubytes/'
        }
    }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br /> Im <span className='text-black'>Ragu</span>
                <p className='text-2xl'>{config.subTitle}</p>
            </h1>
            <div className='flex py-10'>
                <a target='_blank' href={config.social.twitter} className='pr-5 hover:text-white' ><BsTwitterX size={40} /></a>
                <a target='_blank' href={config.social.facebook} className='pr-5 hover:text-white' ><AiOutlineFacebook  className='' size={40}/></a>
                <a target='_blank' href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>

            </div>
        </div>
        <img className='md:w-1/3' src={HeroImage} />
        
    </section>
}