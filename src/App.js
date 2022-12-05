import Nav from "./component/Navbar/Nav";
import NavItem from "./component/Navbar/NavItem";
import NavBar from "./component/Navbar-mobile/Navbar";
import NavbarItem from "./component/Navbar-mobile/NavbarItem";
import Contact from "./component/Contact/Contact";
import SwiperPorto from "./component/Swiper/SwiperPorto";
import "./App.css";
import Description from "./component/Home/Description";
import Hero from "./component/Home/Hero";
import Intro from "./component/About/Intro";
import History from "./component/About/History";
import Skill from "./component/skill/Skill";

import Service from "./component/Service/Service";
import Feature from "./asset/icons/feature.png";
import Animation from "./asset/icons/animation.png";
import Responsive from "./asset/icons/Responsive.png";
import Menu from "./asset/icons/menu.png";
import Code from "./asset/icons/Code.png";
import Call from "./asset/icons/call.png";
import bgcode from "./asset/img/blurbg.webp";

import email from "./asset/icons/gmail.png";
import WA from "./asset/icons/WhatsApp.png";
import IG from "./asset/icons/IG.png";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="">
      <header className="fixed right-0 left-0 z-50">
        <Nav>
          <div className="xs:m-auto">
            <NavItem href="Home">
              <strong>AGUNG</strong>
            </NavItem>
          </div>
          <div
            className="
          flex
          space-x-3
          xs:hidden
          xs:z-50
          "
          >
            <NavItem href="#Home">Home</NavItem>
            <NavItem href="#About">About</NavItem>
            <NavItem href="#Skill">My Skill</NavItem>
            <NavItem href="#Service">Service</NavItem>
            <NavItem href="#Porto">Portofolio</NavItem>
            <NavItem href="#Contact">Contact</NavItem>
          </div>
        </Nav>
        <NavBar>
          <NavbarItem href="#Home">Home</NavbarItem>
          <NavbarItem href="#About">About</NavbarItem>
          <NavbarItem href="#Skill">My Skill</NavbarItem>
          <NavbarItem href="#Service">Service</NavbarItem>
          <NavbarItem href="#Porto">Portofolio</NavbarItem>
          <NavbarItem href="#Contact">Contact</NavbarItem>
        </NavBar>
        {/* <ToggleUp /> */}
      </header>
      <main className="">
        <section
          id="Home"
          className="
      px-[12px]
      sm:px-[60px]
      lg:px-[120px]
      bg-gradient-to-tl to-purple-50 via-purple-100 from-purple-400
      "
        >
          <div className="md:grid md:grid-flow-col md:grid-cols-12 xs:h-screen xs:pt-14 sm:h-screen ">
            <Description />
            <Hero />
          </div>
        </section>
        <h1
          id="About"
          className="text-4xl 
        sm:text-5xl 
        font-semibold 
        text-center
        pt-[50px]
        sm:mt-[0px]
        mb-[30px]
        sm:mb-[40px]
        md:mb-[50px]
        lg:pt-14
        "
        >
          About
        </h1>
        <section
          className="sm:flex sm:h-full lg:mt-7 xs:mb-[50px]
          px-[12px]
          sm:px-[60px]
          lg:px-[120px]"
        >
          <Intro />
          <History />
        </section>

        <section
          className="bg-gradient-to-tr 
        to-[#3971A4]
        via-[#8333fc]
        from-[#A66CFF]
        lg:pb-14
        px-[12px]
        sm:px-[60px]
        lg:px-[120px]
        pb-[50px]
        "
        >
          <h1
            id="Skill"
            className="text-4xl 
        sm:text-5xl 
        font-semibold
        text-white
        text-center
        pt-[50px]
        sm:mt-[50px]
        lg:mt-[44px]
        mb-[30px]
        sm:mb-[40px]
        md:mb-[50px]
        lg:pt-14
        "
          >
            My Skill
          </h1>

          <Skill />
        </section>
        <h1
          id="Service"
          className="text-4xl 
        sm:text-5xl 
        font-semibold 
        text-center
        pt-[50px]
        sm:mt-[50px]
        lg:mt-[44px]
        lg:pt-14
        mb-[30px]
        sm:mb-[40px]
        md:mb-[50px]
        "
        >
          Service
        </h1>
        <section className="sm:flex flex-wrap justify-center sm:h-full xs:mb-[50px]">
          <Service
            gambar={Feature}
            title="Awesome Feature"
            text="Create current features with the simplest algorithm"
          />
          <Service
            gambar={Animation}
            title="Animated Elements"
            text="Elements look alive with smooth animation"
          />
          <Service
            gambar={Responsive}
            title="Responsive"
            text="Designing a website layout that can adapt to the user's screen size"
          />
          <Service
            gambar={Menu}
            title="User Friendly"
            text="Implement a user friendly in using the website"
          />
          <Service
            gambar={Code}
            title="Clean Code"
            text="Implementation of a reader-focused code structure that results in software that is easy to write, read and maintain"
          />
          <Service
            gambar={Call}
            title="Fast Respond"
            text="Respond to your requests quickly, friendly, and professional"
          />
        </section>
        <section
          style={{ backgroundImage: `url(${bgcode})` }}
          className="bg-cover bg-no-repeat pb-14 lg:pb-14
          px-[12px]
          sm:px-[60px]
          lg:px-[120px]"
        >
          <h1
            id="Porto"
            className="text-4xl 
        sm:text-5xl 
        font-semibold 
        text-white
        text-center
        pt-[50px]
        sm:mt-[50px]
        lg:mt-[44px]
        lg:pt-14
        mb-[30px]
        sm:mb-[40px]
        md:mb-[50px]
        "
          >
            Portofolio
          </h1>
          <SwiperPorto />
        </section>
        <h1
          id="Contact"
          className="text-4xl 
        sm:text-5xl 
        font-semibold 
        text-center
        pt-[50px]
        sm:pt-[50px]
        lg:mt-[44px]
        lg:pt-14
        mb-[30px]
        sm:mb-[40px]
        md:mb-[50px]
        "
        >
          Contact
        </h1>
        <section
          className="sm:flex px-[12px]
          sm:px-[60px]
          lg:px-[120px]"
        >
          <Contact
            gambar={WA}
            text={" fast respont "}
            title={"0813-3406-7171"}
          />
          <Contact gambar={IG} text={"1 - 2 hour"} title={"agung_trl"} />
          <Contact
            gambar={email}
            text={"1 - 2 hour"}
            title={"agungtrileksono1@gmail.com"}
          />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
