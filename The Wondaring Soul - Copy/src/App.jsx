import React, { useState } from "react";
import Header from "./Header"; 
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Contect from "./Contect";
import Blog from './Blog'



const App = () => {
  const [searchQuery, setSearchQuery] = useState("rajasthan");

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };
  return (
    <div className="App">
      {/* Header Component */}
      <Header onSearch={handleSearchQuery}/>
      
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery}/>}></Route>
        <Route path="/contect" element={<Contect />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
      
    </div>
  );
};


export default App;

