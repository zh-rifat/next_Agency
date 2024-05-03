import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import CodingAnimation from '@/components/animations/CodingAnimation';
import MailAnimation from '@/components/animations/MailAnimation';
import { Button } from '@/components/ui/button';
import { aboutDescription } from '@/utils/info';
import { socialMediaList } from '@/utils/lists';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IoLocationOutline, IoMailOpenOutline } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';

interface pageProps {
  
}

const HomePage: FC<pageProps> = ({}) => {
  return (
    <main>
      <section className="bg-background dark:bg-secondary w-full py-12 hero">
        <div className="n-container px-20 grid grid-cols-1 md:grid-cols-2 gap-y-7 place-items-center">
          <div>
            <h1 className='text-5xl font-extrabold mb-4'>Welcome to Fauz!</h1>
            <p className='text-muted'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum id consequatur ullam blanditiis porro ea repellendus atque repudiandae quasi velit.</p>
            <div className='mt-4'>
              <Button size='lg' className='bg-foreground hover:bg-background hover:border text-background hover:text-foreground font-bold'> Learn More</Button>
            </div>
          </div>
          <div className='w-full flex flex-col items-center md:items-end'>
            <Image className='' src={'/images/p1.png'} alt='intro' width={400} height={300}/>
          </div>
        </div>

      </section>
      <section id='about' className='n-container border-b-2 py-12 bg-secondary dark:bg-background shadow-md'>
        <h1 className='section-title '>About Us</h1>
        <div className='flex flex-col md:flex-row justify-between items-center md:space-x-5 py-12'>
          <CodingAnimation className='w-64 mx-auto md:w-80'/>
          <p className='text-justify section-text flex-1'>
            {aboutDescription}
          </p>
        </div>
      
      </section>

      <section id="services" className='py-12 dark:bg-secondary'>
        <div className="n-container">
          <h1 className='section-title '>Our Services</h1>
          <div className="py-12 grid grid-cols-2 xl:grid-cols-3  gap-x-4 gap-y-8">
            <ServiceCard title='Web Development' imgUrl='/images/logo.png' description={aboutDescription}/>
            <ServiceCard title='Web Development' imgUrl='/images/logo.png' description={aboutDescription}/>
            <ServiceCard title='Web Development' imgUrl='/images/logo.png' description={aboutDescription}/>
            <ServiceCard title='Web Development' imgUrl='/images/logo.png' description={aboutDescription}/>
            <ServiceCard title='Web Development' imgUrl='/images/logo.png' description={aboutDescription}/>
            <ServiceCard title='Web Development' imgUrl='/images/logo.png' description={aboutDescription}/>
            <ServiceCard title='Web Development' imgUrl='/images/logo.png' description={aboutDescription}/>
          </div>
        </div>
      </section>
      <section id='contact' className='n-container pt-4 pb-16 bg-secondary dark:bg-background'>
        <h1 className="section-title">Contact Us</h1>
        <div className='flex flex-col md:flex-row justify-center items-center md:space-x-24 py-12'>
          <div>
            <MailAnimation className='w-64 md:w-80 mx-auto'/>
            <div className='flex flex-col space-y-2 my-3'>
              <div className='flex flex-row items-center space-x-2'>
                <IoLocationOutline className='text-2xl'/>
                <Link href="#" className='text-xl'>Dhaka, Bangladesh</Link>
              </div>
              <div className='flex flex-row items-center space-x-2'>
                <IoMailOpenOutline className='text-2xl'/>
                <Link href="mailto:neuronite.kuet@gmail.com" className='text-xl'>fauz@gmail.com</Link>
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
