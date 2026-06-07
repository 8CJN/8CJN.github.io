import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
