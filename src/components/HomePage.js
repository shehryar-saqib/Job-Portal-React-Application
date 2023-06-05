import {Jobs} from "./Jobs";
import { useState,useEffect } from "react";
import {Header} from "./Header";
import { BelowHeader } from "./BelowHeader";
import {Search} from "./Search";
import {Link, useLocation} from 'react-router-dom';
import logoSvg from './logo.svg';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
const image = require('../logo.svg');

export const HomePage =()=>{
  const [filterKeywords, setfilterKeywords] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [icon, setIcon] = useState("");
  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');



  useEffect(() => {
    const renderPosts = async () => {
      let url = 'http://localhost:3000/jobs';
      const res = await fetch(url);
      const posts = await res.json();
      setJobs(posts);
    };

    renderPosts();
  },[]);


  const importSvgs = (logo) => {
    const logoSvg = import(`${logo}`).then((post) => {
      setIcon(post.default);
    });
  };


  useEffect(() => {
    jobs.forEach((job) => importSvgs(job.logo));
  }, [jobs]);


  const HandleSubmit= () => {

  }


  
  const cardContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  
  const buttonStyle = {
    width: '200px',
    height: '60px',
    fontSize: '1.2rem',
    margin: '10px',
  };
  
  const imageStyle = {
    width: '100%',
    marginBottom: '10px',
  };
  
  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      <Grid item xs={9}>
      <div style={{ display: 'flex',flexWrap: 'wrap', justifyContent: 'center' }}>
      {jobs.map(post => (
        
        <div
        className={
          post.featured ? "job-container job-container--borderLeft" : "job-container"
        }
      >
  
        
         <div className="logo">
            <img src={post.logo} style={{ width: '50px',height: '50px'}} alt="" />
          </div>
        <div className="part1">
          <div className="company">
            <span className="cname">{post.company}</span>
            {post.new && <span className="new">new!</span>}
            {post.featured && <span className="featured">featured</span>}
          </div>
  
          <div className="position"><Link to="/jobDetail"  state={{email:email,post:post}}>{post.position}</Link></div>
  
          <div className="details">
            <span>{post.postedAt}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{post.contract}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{post.location}</span>
          </div>
        </div>
      </div>
  
      ))}
      </div>
      </Grid>
      <Grid item xs={3}>
        {/* Card occupying 20% width */}
        <Card sx={{ width:'35%%', height: '100%' }} style={{ position: 'fixed',
  left: '73%',
  overflowY: 'auto',
  backgroundImage: 'url("https://img.freepik.com/free-vector/pastel-gradient-2_78370-257.jpg")',
  backgroundSize: 'cover' }}>
          <CardContent style={cardContentStyle}>
            <Typography variant="h4" gutterBottom>
            You are at the right place if you are looking for jobs or hiring. 
            </Typography>
            <img src="https://i.pinimg.com/736x/50/9c/57/509c570fe6aee95ec1dfc84b5825b592.jpg" alt="Image 1" style={imageStyle} />
            {/* <img src="https://t4.ftcdn.net/jpg/03/96/53/45/360_F_396534571_DNvLJH8BNecSarpoJs9bA2tjFY8fnT6q.jpg" alt="Image 2" style={imageStyle} /> */}
            <Button
              variant="contained"
              color="secondary"
              style={buttonStyle}
              component={Link}
              to="/myjobs"
              state={{ email: email }}
            >
              My Jobs
            </Button>
            
            <Button
              variant="contained"
              color="secondary"
              style={buttonStyle}
              component={Link}
              to="/post"
              state={{ email: email }}
            >
              Post Job
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}


