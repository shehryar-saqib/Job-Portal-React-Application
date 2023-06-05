import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AboutPage} from './components/AboutPage';
import {Contact} from './components/Contact';
import { Login } from './components/Login';
import { Register } from './components/Register';
import {HomePage} from './components/HomePage';
import {BelowHeader} from './components/BelowHeader'
import JobDetails from './components/jobDetails.tsx';
import PostJob from './components/PostJob';
import JobDetail from './components/JobDetail';
import MyJobs from './components/MyJobs';

export const Routing= ()=> {
    return (
        
        <Routes>
            
            <Route exact path="/" element={<Login />} />
            <Route path="/jobDetail" element={<JobDetail />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/myjobs" element={<MyJobs />} />

            <Route path="/post" element={<PostJob />} />
         </Routes>
         
    )
  }
  