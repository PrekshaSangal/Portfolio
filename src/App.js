import './App.css';

import React from 'react';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
// importing react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { SpeedInsights } from "@vercel/speed-insights/react"
import NotFound from './components/NotFound';
import Dashboard from './components/admin/Dashboard';
import View from './components/View';

import AdminDetails from './components/admin/AdminDetails';
import AdminProjects from './components/admin/AdminProjects';
import AdminSkills from './components/admin/AdminSkills';
import AdminResume from './components/admin/AdminResume';
import AdminStats from './components/admin/AdminStats';

import { Analytics } from "@vercel/analytics/react"
// import { useLocation } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <Analytics/>
      


        <Routes>
          <Route path="/admin" element={<Dashboard/>}>
            <Route path="/admin" element={<AdminDetails/>} />
            <Route path="/admin/details" element={<AdminDetails/>} />
            <Route path="/admin/projects" element={<AdminProjects/>} />
            <Route path="/admin/skills" element={<AdminSkills/>} />
            <Route path='/admin/resume' element={<AdminResume/>} />
            <Route path="/admin/stats" element={<AdminStats/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
          <Route path="/" element={<View/>}>
            <Route path="/" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
        <SpeedInsights/>
      </Router>
    </div>
  );
}

export default App;
