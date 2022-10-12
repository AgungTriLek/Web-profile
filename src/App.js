import Nav from './component/Navbar/Nav'
import NavItem from './component/Navbar/NavItem'
import NavBar from './component/Navbar-mobile/Navbar';
import NavbarItem from './component/Navbar-mobile/NavbarItem';
import './App.css';
import Description from './component/Home/Description';
import Hero from './component/Home/Hero';

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
      flex
      px-[12px]
      sm:px-[60px]
      lg:px-[120px]
      '>
        <Description />
        <Hero />
      </main>
    </div>
  );
}

export default App;
