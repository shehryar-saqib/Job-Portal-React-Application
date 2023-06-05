import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const MyJobs = () => {
  const { state } = useLocation();
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users?email=${state.email}`);
        const users = await response.json();
        if (users.length > 0) {
          setUser(users[0]);
          const jobIds = users[0].joblist;
          const jobResponse = await fetch('http://localhost:3000/jobs');
          const jobPosts = await jobResponse.json();
          const filteredJobs = jobPosts.filter((job) => jobIds.includes(job.id));
          setJobs(filteredJobs);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [state.email]);



  const handleDeleteJob = async (jobId) => {
    try {
      // Make a copy of the jobs array and remove the job with the given ID
      const updatedJobs = jobs.filter((job) => job.id !== jobId);
      setJobs(updatedJobs);
  
      // Update the user's joblist based on their email
      const response = await fetch(`http://localhost:3000/users?email=${state.email}`);
      const users = await response.json();
      if (users.length > 0) {
        const userToUpdate = users[0];
        const updatedJobIds = userToUpdate.joblist.filter((id) => id !== jobId);
  
        // Update the user data on the server
        await fetch(`http://localhost:3000/users/${userToUpdate.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...userToUpdate, joblist: updatedJobIds }),
        });
  
        // Update the user state with the updated joblist
        setUser((prevUser) => ({ ...prevUser, joblist: updatedJobIds }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  

  
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {jobs.map((post) => (
        <div
          key={post.id}
          className={post.featured ? 'job-container job-container--borderLeft' : 'job-container'}
        >
          <div className="logo">
            <img src={post.logo} style={{ width: '50px', height: '50px' }} alt="" />
          </div>
          <div className="part1">
            <div className="company">
              <span className="cname">{post.company}</span>
              {post.new && <span className="new">new!</span>}
              {post.featured && <span className="featured">featured</span>}
            </div>
            <div className="position">
              {post.position}
            </div>
            <div className="details">
              <span>{post.postedAt}</span>
              <span>&nbsp;•&nbsp;</span>
              <span>{post.contract}</span>
              <span>&nbsp;•&nbsp;</span>
              <span>{post.location}</span>
            </div>
          </div>
          <Button variant="contained" color="secondary" onClick={() => handleDeleteJob(post.id)}>
          Delete Job
        </Button>
        </div>
      ))}
    </div>
  );
};

export default MyJobs;
