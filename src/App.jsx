import './App.css';
import About from "./components/About/About";
import Certificates from "./components/Certificates/certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Partnerships from "./components/Partnerships/Partnerships";
import Puppies from "./components/Puppies/Puppies";
import { BrowserRouter } from 'react-router-dom';




function App() {
  return (

   
      <div className="App">
        <BrowserRouter>
        <div>
          <div className="white-gradient" />
            <Header />
            <Hero />
          </div>
          
        <Certificates />

        
          <Puppies to='/puppies'/> 
          <About to='/about'/>
          <Contact to=''/>
          <Partnerships to='' />
        

        <Footer />
        </BrowserRouter>
        </div>
  
    
  );
}

export default App;
