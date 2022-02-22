import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './Responsive.css';
import About from './Components/Pages/About/About';
import Blog from './Components/Pages/Blog/Blog';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import PageNotFound from './Components/Pages/PageNotFound/PageNotFound';
import Portfolio from './Components/Pages/Portfolio/Portfolio';
import Register from './Components/Pages/Register/Register';
import Service from './Components/Pages/Service/Service';
import SingleProject from './Components/Pages/SingleProject/SingleProject';
import SingleService from './Components/Pages/SingleService/SingleService';
import 'swiper/css/bundle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/services" element={<Service></Service>}></Route>
          <Route path="/singleproject" element={<SingleProject></SingleProject>}></Route>
          <Route path="/singleservice" element={<SingleService></SingleService>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
