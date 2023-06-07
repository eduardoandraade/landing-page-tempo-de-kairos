import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import './App.css'
import Certificates from "./components/Certificates/certificates";
import Puppies from "./components/Puppies/Puppies";
import About from "./components/About/About";



function App() {
  return (
    <div className="App">

      <div>
        <div className="white-gradient" />
          <Header />
          <Hero />
      </div>
      <Certificates />
      <Puppies />
      <About />
      <Footer />

    </div>
  );
}

export default App;
