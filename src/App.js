import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./component/home"
import BlogPage from "./component/blogPage"

function App() {
  return (
    <div className="app">
      <Router>
        
        <div className="main">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/:slug" element={<BlogPage />} />
          </Routes>
        </div>
   </Router>
    </div>
  );
}

export default App;
