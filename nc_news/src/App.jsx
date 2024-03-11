import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import ArticleCard from "./assets/Components/ArticleCard";
import ArticlesList from "./assets/Components/ArticlesList";
import Home from "./assets/Components/Home";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/" element={<ArticleCard/>}></Route>
      <Route path="/" element={<ArticlesList/>}></Route>
    </Routes>
  </div>
  )
}

export default App;
