import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";
import Contact from "./Views/Contact";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/products/:id" element={<Product/>}/>
        </Routes>     
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
