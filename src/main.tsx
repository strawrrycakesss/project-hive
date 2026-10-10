import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';import Layout from './components/Layout';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';
import Movie from './pages/Movie';
import Cinemas from './pages/Cinemas';
import Booking from './pages/Booking';
import Merchandise from './pages/Merchandise';
import Characters from './pages/Characters';
import Predictions from './pages/Predictions';
import Community from './pages/Community';
import Search from './pages/Search';
import Admin from './pages/Admin';
import SubmissionForm from './pages/Forms';
createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter>
    <Routes>
    <Route element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="dashboard" element={<Dashboard/>}/>
    <Route path="movie" element={<Movie/>}/>
    <Route path="cinemas" element={<Cinemas/>}/>
    <Route path="booking" element={<Booking/>}/>
    <Route path="merchandise" element={<Merchandise/>}/>
    <Route path="characters" element={<Characters/>}/>
    <Route path="predictions" element={<Predictions/>}/>
    <Route path="community" element={<Community/>}/>
    <Route path="search" element={<Search/>}/>
    <Route path="admin" element={<Admin/>}/>
    <Route path="submit" element={<SubmissionForm/>}/>
    <Route path="submit/:id" element={<SubmissionForm/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </React.StrictMode>
    );
