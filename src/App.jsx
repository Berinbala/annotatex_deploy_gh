import React from 'react';
import Testimonials from './components/Testimonials';
// import DeveloperTools from './components/DeveloperTools';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import Newsletter from './components/Newsletter';
import Annotation from './components/Annotation';
import Benefits from './components/Benefits';
import RecentProjects from './components/RecentProjects';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <RecentProjects />
      {/* <Newsletter /> */}
      <Annotation />
      <Testimonials />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
