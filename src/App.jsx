import AboutUs from './components/aboutus';
import ContactUs from './components/contactus';
import Projects from './components/projects';
import DigiFooter from './components/DigiFooter';
import DigiNav from './components/DigiNav';
import './App.css'

function App() {

  return (
    <div>
    <DigiNav/>
    <div className='container-fluid'>

    <AboutUs/>
    <Projects/>
    <ContactUs/>
    </div>
    <DigiFooter/>

      

    </div>
  );
}


export default App
