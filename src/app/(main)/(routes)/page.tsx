import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import CodingAnimation from '@/components/animations/CodingAnimation';
import MailAnimation from '@/components/animations/MailAnimation';
import { socialMediaList } from '@/utils/lists';
import Link from 'next/link';
import { FC } from 'react';

interface pageProps {
  
}

const HomePage: FC<pageProps> = ({}) => {
  return (
    <main>
      <section className="bg-[url('/images/banner1.jpg')] w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px]  2xl:h-[750px] bg-cover bg-no-repeat bg-right bg-fixed">
        
      </section>
      <section className='n-container border-b-2 py-3 bg-slate-200 shadow-md'>
        <h1 className='section-title'>About Us</h1>
        <div className='flex flex-col md:flex-row justify-between items-center md:space-x-5 py-12'>
          <CodingAnimation className='w-64 mx-auto md:w-80'/>
          <p className='text-justify section-text flex-1'>
          Welcome to Neuronite, the premier programming and software skills learning platform based in Khulna University of Engineering & Technology. Our courses in C, C++, Python, Canva, Power BI, and LaTeX are designed to educate students in programming, software skills, and technology. Our expert teachers are committed to helping students achieve their full potential. Whether you're a beginner or an experienced programmer, Neuronite offers flexible and comprehensive courses to meet your needs. Contact us today to learn more about our programming courses and expand your skills in data science and machine learning.
          </p>
        </div>
      
      </section>
      <section className='n-container py-3'>
        <h1 className="section-title my-8">Contact Us</h1>
        <div className='flex flex-col md:flex-row justify-center items-center md:space-x-24'>
          <MailAnimation className='w-64 md:w-80'/>
          <ContactForm/>
        </div>
        <div className='flex flex-row items-center justify-center mt-16 space-x-4 py-2 border-t-2 border-b-2'>
            {socialMediaList.map((item,i)=>(
                <Link key={i} href={item.url}>
                  <item.icon className={`text-3xl`} style={{color:item.color}}/>
                </Link>
            ))

            }
        </div>
      </section>
    </main>
  )
}

export default HomePage;  
