


import './App.css';
import Home from './components/Home';
import About from './components/About';
import Speakers from './components/Speakers';
import Contact from './components/Contact';
function App() {
  return (
    // <div className='bg-red-500'>
     <div className="home"> 
        <Home></Home>
        <h1 className='font-bold text-4xl text-[#CA15EB] text-center mt-24'>OUR SPEAKERS</h1>
        <Speakers></Speakers>
        <About></About>
        <Contact></Contact>
     </div>
      
      
     
  );
}




export default App;
