import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";
import About from './components/About us';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Our from './components/Our';
import Contact from './components/Contact';
import Napbar from './components/Napbar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Napbar />

      <Routes >
        <Route path="/" element={<App/>} />
        <Route path="about us" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={< Gallery />} />
        <Route path="our teams" element={< Our />} />
        <Route path="contact us" element={< Contact />} />
      </Routes><Footer />

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
