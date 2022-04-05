import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Blog from './components/Blog';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Home from './components/Home.js';
import Body from './components/Body';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
            <Route path="/"element={<Home />}></Route>
            <Route path="/about"element={<About />}></Route>
            <Route path="/blog"element={<Blog />}></Route>
            <Route path="/first"element={<First/>}></Route>
            <Route path="/second"element={<Second/>}></Route>
            <Route path="/third"element={<Third/>}></Route>
        </Routes>
      <Footer />
      </Router>
      
</div>
  );
}

export default App;
