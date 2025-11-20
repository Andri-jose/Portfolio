import Navbar from './components/navbar.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contacts from './components/contacts.jsx';
import './App.css'




function App() {

  return ( 
    <div className="">
      <div className='add'>
        <Navbar />
      </div>
      <div className='px-10 md:mx-10'>
        <About />
        <Portfolio />
        <Contacts />
      </div>
    </div>
  );
}

export default App
