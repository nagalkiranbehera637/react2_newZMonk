import React, { useState } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

const App =()=> {
     const pageSize=10
    const [progress,setProgress]=useState(0)
     const setprogress=(progres)=>{
        setProgress(progres)
     }
     const Apikey =import.meta.env.VITE_NEWS_API_KEY;


    return (
      <Router>
        <Navbar />
        <LoadingBar
        height={3}
        progress={progress}
        />

        <Routes>
          <Route exact path='/' element={<News Api_key={Apikey} setProgress={setprogress} key="general" pageSize={pageSize} country="us" category="general" />} />
          <Route exact path='/business' element={<News Api_key={Apikey} setProgress={setprogress} key="business" pageSize={pageSize} country="us" category="business" />} />
          <Route exact path='/entertainment' element={<News Api_key={Apikey} setProgress={setprogress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
          <Route exact path='/general' element={<News Api_key={Apikey} setProgress={setprogress} key="general" pageSize={pageSize} country="us" category="general" />} />
          <Route exact path='/health' element={<News Api_key={Apikey} setProgress={setprogress} key="health" pageSize={pageSize} country="us" category="health" />} />
          <Route exact path='/science' element={<News Api_key={Apikey} setProgress={setprogress} key="science" pageSize={pageSize} country="us" category="science" />} />
          <Route exact path='/sports' element={<News Api_key={Apikey} setProgress={setprogress} key="sports" pageSize={pageSize} country="us" category="sports" />} />
          <Route exact path='/technology' element={<News Api_key={Apikey} setProgress={setprogress} key="technology" pageSize={pageSize} country="us" category="technology" />} />
        </Routes>
      </Router>
    );
}
export default App
