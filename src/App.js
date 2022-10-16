import Nav from './component/Navbar/Nav'
import NavItem from './component/Navbar/NavItem'
import NavBar from './component/Navbar-mobile/Navbar';
import NavbarItem from './component/Navbar-mobile/NavbarItem';
import Contact from './component/Contact/Contact';
import SwiperPorto from './component/Swiper/SwiperPorto';
import './App.css';
import Description from './component/Home/Description';
import Hero from './component/Home/Hero';
import Intro from './component/About/Intro';
import History from './component/About/History';
import Skill from './component/skill/Skill';
import Bootstrap from './asset/img/Bootstrap.png'
import CSS3 from './asset/img/CSS3.png'
import Express from './asset/img/Express Js.png'
import Html from './asset/img/Html 5.png'
import JavaScript from './asset/img/JavaScript.png'
import MongoDB from './asset/img/MongoDB.png'
import Next from './asset/img/Next.js.png'
import Node from './asset/img/Nodejs.png'
import React from './asset/img/React.png'
import Service from './component/Service/Service';
import Feature from './asset/icons/feature.png';
import Animation from './asset/icons/animation.png';
import Responsive from './asset/icons/Responsive.png';
import Menu from './asset/icons/menu.png';
import Code from './asset/icons/Code.png';
import Call from './asset/icons/call.png';

import email from './asset/icons/gmail.png';
import WA from './asset/icons/WhatsApp.png';
import IG from './asset/icons/IG.png';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="">
      <header>
        <Nav>
          <div className='xs:m-auto'>
            <NavItem href='Home'>AGUNG</NavItem>
          </div>
          <div className='
          flex
          space-x-3
          xs:hidden
          '>
            <NavItem href='#Home'>Home</NavItem>
            <NavItem href='#About'>About</NavItem>
            <NavItem href='#My-Skill'>My Skill</NavItem>
            <NavItem href='#Project'>Project</NavItem>
            <NavItem href='#Contact'>Contact</NavItem>
          </div>
        </Nav>
        <NavBar>
          <NavbarItem href='#Home'>
            Home
          </NavbarItem>
          <NavbarItem href='#About'>About</NavbarItem>
          <NavbarItem href='#My-Skill'>My Skill</NavbarItem>
          <NavbarItem href='#Project'>Project</NavbarItem>
          <NavbarItem href='#Contact'>Contact</NavbarItem>
        </NavBar>
      </header>
      <main 
      className='
      px-[12px]
      sm:px-[60px]
      lg:px-[120px]
      '>
        <section className='flex'>
        <Description />
        <Hero />
        </section>
        <h1 
        className='text-4xl 
        sm:text-5xl 
        font-semibold 
        text-center
        mt-[40px]
        sm:mt-[50px]
        lg:mt-[100px]
        mb-[30px]
        sm:mb-[40px]
        md:mb-[50px]
        '>
          About
        </h1>
        <section className='sm:flex'>
          <Intro />
          <History />
        </section>
        <h1 
        className='text-4xl 
        sm:text-5xl 
        font-semibold 
        text-center
        mt-[40px]
        sm:mt-[50px]
        lg:mt-[100px]
        mb-[30px]
        sm:mb-[40px]
        md:mb-[50px]
        '>
          My Skill
        </h1>
        <section className='text-center sm:flex sm:flex-wrap sm:justify-center'>
          <Skill gambar={Html} text='HTML 5' />
          <Skill gambar={CSS3} text='CSS' />
          <Skill gambar={JavaScript} text='Javascript' />
          <Skill gambar={Bootstrap} text='Bootstrap' />
          <Skill gambar={React} text='React' />
          <Skill gambar={Next} text='Next.js' />
          <Skill gambar={Node} text='Node.js' text2='Basic' />
          <Skill gambar={MongoDB} text='MongoDB' text2='Basic' />
          <Skill gambar={Express} text='Express' text2='Basic' />
        </section>
        <h1 
        className='text-4xl 
        sm:text-5xl 
        font-semibold 
        text-center
        mt-[40px]
        sm:mt-[50px]
        lg:mt-[100px]
        mb-[30px]
        sm:mb-[40px]
        md:mb-[50px]
        '>
          Service
        </h1>
        <section className='sm:flex flex-wrap justify-center' >
          <Service gambar={Feature} title='Awesome Feature' text='Create current features with the simplest algorithm' />
          <Service gambar={Animation} title='Animated Elements' text='Elements look alive with smooth animation' />
          <Service gambar={Responsive} title='Responsive' text="Designing a website layout that can adapt to the user's screen size" />
          <Service gambar={Menu} title='User Friendly' text='Implement a user friendly in using the website' />
          <Service gambar={Code} title='Clean Code' text='Implementation of a reader-focused code structure that results in software that is easy to write, read and maintain' />
          <Service gambar={Call} title='Fast Respond' text='Respond to your requests quickly, friendly, and professional' />
        </section>
        <h1 
        className='text-4xl 
        sm:text-5xl 
        font-semibold 
        text-center
        mt-[40px]
        sm:mt-[50px]
        lg:mt-[100px]
        mb-[30px]
        sm:mb-[40px]
        md:mb-[50px]
        '>
          Portofolio
        </h1>
        <section>
          <SwiperPorto />
        </section>
        <h1 
        className='text-4xl 
        sm:text-5xl 
        font-semibold 
        text-center
        mt-[40px]
        sm:mt-[50px]
        lg:mt-[100px]
        mb-[30px]
        sm:mb-[40px]
        md:mb-[50px]
        '>
          Contact
        </h1>
        <section className='sm:flex'>
          <Contact gambar={WA} text={' fast respont '} title={"0813-3406-7171"} />
          <Contact gambar={IG} text={'1 - 2 hour'} title={"agung_trl"}/>
          <Contact gambar={email} text={'1 - 2 hour'} title={"agungtrileksono1@gmail.com"}/>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
