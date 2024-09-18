import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import './App.css'
import Links from './components/links'
import usePageTracking from "./usePageTracking";
function App() {
  usePageTracking();

  return (
    <>
     <Links></Links>
    </>
  )
}

export default App
