import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import CodingAnimation from '@/components/animations/CodingAnimation';
import MailAnimation from '@/components/animations/MailAnimation';
import { aboutDescription } from '@/utils/info';
import { socialMediaList } from '@/utils/lists';
import Link from 'next/link';
import { FC } from 'react';
import { IoLocationOutline, IoMailOpenOutline } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';

interface pageProps {
  
}

const HomePage: FC<pageProps> = ({}) => {
  return (
    <main>
      <section className="bg-[url('/images/banner1.jpg')] w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px]  2xl:h-[750px] bg-cover bg-no-repeat bg-right bg-fixed">
        
      </section>
      <section className='n-container border-b-2 py-4 bg-slate-200 shadow-md'>
        <h1 className='section-title'>About Us</h1>
        <div className='flex flex-col md:flex-row justify-between items-center md:space-x-5 py-12'>
          <CodingAnimation className='w-64 mx-auto md:w-80'/>
          <p className='text-justify section-text flex-1'>{aboutDescription}</p>
        </div>
      
      </section>
      <section className='n-container pt-4 pb-16'>
        <h1 className="section-title">Contact Us</h1>
        <div className='flex flex-col md:flex-row justify-center items-center md:space-x-24 py-12'>
          <div>
            <MailAnimation className='w-64 md:w-80 mx-auto'/>
            <div className='flex flex-col space-y-2 my-3'>
              <div className='flex flex-row items-center space-x-2'>
                <IoLocationOutline className='text-2xl'/>
                <Link href="#" className='text-xl'>Khulna, 9203, Bangladesh</Link>
              </div>
              <div className='flex flex-row items-center space-x-2'>
                <IoMailOpenOutline className='text-2xl'/>
                <Link href="mailto:neuronite.kuet@gmail.com" className='text-xl'>neuronite.kuet@gmail.com</Link>
              </div>
            </div>
          </div>
          <ContactForm/>
        </div>

      </section>
    </main>
  )
}

export default HomePage;  
