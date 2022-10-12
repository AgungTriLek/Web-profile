import Nav from './component/Navbar/Nav'
import NavItem from './component/Navbar/NavItem'
import NavBar from './component/Navbar-mobile/Navbar';
import NavbarItem from './component/Navbar-mobile/NavbarItem';
import './App.css';
import Description from './component/Home/Description';
import Hero from './component/Home/Hero';
import Intro from './component/About/Intro';
import History from './component/About/History';

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
      </main>
    </div>
  );
}

export default App;
