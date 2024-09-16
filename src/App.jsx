import Hero from "./HeroSection/Hero.jsx"
import FeaturedProperties from "./Properties/FeaturedProperties.jsx"; 
import "./App.css"
import Agents from "./Agents/Agents.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import Footer from "./Footer/Footer.jsx";
function App() {
  return(<>
  
    <Hero/>
    <FeaturedProperties/>
    <Agents/>
    <AboutUs/>
    <ContactUs/>
    <Footer/>
  </>)
}

export default App
