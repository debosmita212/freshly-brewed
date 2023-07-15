import './App.scss';
import About from './components/About/About';
import Areas from './components/Areas/Areas';
import Community from './components/Community/Community';
import Home from './components/Home/Home';
import Mentors from './components/Mentors/Mentors';
import Register from './components/Register/Register';
import Testimonial from './components/Testimonial/Testimonial';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Routes>  
                 <Route path='/' element={< Home />}></Route>  
                 <Route path='/about' element={< About />}></Route>  
                 <Route path='/mentors' element={< Mentors />}></Route>  
                 <Route path='/register' element={< Register />}></Route>  
                 <Route path='/areas' element={< Areas />}></Route>  
                 <Route path='/community' element={< Community />}></Route>  
                 <Route path='/testimonials' element={< Testimonial />}></Route>  
          </Routes> 

    </div>
  );
}

export default App;
