import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Navbar from "./assets/Components/Navbar";
import ArticleCard from "./assets/Components/ArticleCard";
import ArticlesList from "./assets/Components/ArticlesList";
import Home from "./assets/Components/Home";
import Comments from "./assets/Components/Comments";
// import UserContext from "./assets/Contexts/User";

function App() {
  // const [loggedInUser, setLoggedInUser] = useState({
  //   username: "ray123",
  //   name: "Ray Beera",
  //   avatar_url:
  //     "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
  // });
  return (
    // <UserContext.Provider value={{ loggedInUser: loggedInUser }}>
  <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/articles/:article_id" element={<ArticleCard />}></Route>
        <Route path="/articles" element={<ArticlesList/>} ></Route>
        <Route
          path="/articles/:article_id/comments"
          element={<Comments />}
        ></Route>
      </Routes>
      </div>
    // </UserContext.Provider>
  );
}

export default App;
