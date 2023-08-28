

import React, {useEffect}  from 'react';
import { Routes , Route} from 'react-router-dom';
import './App.css';
import './responsive.css';
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';
import Loader from './Common/Loader';

import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Works from './Works/Works';
import Services from './Services/Services';
import Blog from './Blog/Blog';
import Blogdetails from './Blog/Blogdetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Serviceslist from './Services/Serviceslist';
import Servicedetails from './Services/Servicedetails';
import Scrolltop from './Scrolltop/Scrolltop';
import Workdetails from './Works/Workdetails';
import Worklist from './Works/Worklist';
import Bloglist from './Blog/Bloglist';
import PageNotFound from './PageNotFound';



function App() {
  
  const URL = "live";

  useEffect(() => {
    AOS.init();
  }, [])

  return (
  <div className='App'>
        <Loader />
        <Header />

       
        <Routes>
            <Route path='/' element={<Home />} />
           
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />

            <Route path='/services' element={< Services />} >
              <Route index element={<Serviceslist />} />
              <Route path=":slug" element={<Servicedetails />} />
            </Route>

            <Route path='/works' element={< Works />} >
              <Route index element={<Worklist />} />
              <Route path=":slug" element={<Workdetails />} />
            </Route>
            

            <Route path='/blog' element={< Blog />} >
              <Route index element={<Bloglist />} />
              <Route path=":slug" element={<Blogdetails/>} />
            </Route>

            <Route path='/contact' element={<Contact />} />

            <Route path='*' element={ <PageNotFound /> } />

        </Routes>
      
        <Scrolltop />
        <Footer />
    
  </div>
  );
}

export default App;
