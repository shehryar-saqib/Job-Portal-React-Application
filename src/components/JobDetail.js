import React, { useState } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  Stack,
  SelectChangeEvent,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import './JobPostingForm.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';



export const JobDetail = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const [user, setUser] = useState(null);


    const handleApplyNow = () => {
      fetch(`http://localhost:3000/users?email=${state.email}`)
          .then(response => response.json())
          .then(data => {
            // document.getElementById("hello").innerHTML=data[0].id;
              const updatedUser = data[0];
              updatedUser.joblist.push(state.post.id);
              fetch(`http://localhost:3000/users/${updatedUser.id}`, {
                  method: 'PUT',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(updatedUser)
              })
                  .then(response => response.json())
                  .then(data => {
                      setUser(data);
                      const email = state.email; // Get the email from state
           navigate(`/home?email=${encodeURIComponent(email)}`);
                      console.log('User updated:', data);
                  })
                  .catch(error => {
                      console.error('Error updating user:', error);
                  });
          })
          .catch(error => {
              console.error('Error fetching user:', error);
          });
  };



    return (
        <div className="job-details-container">
          {/* THE ERROR IS HEREEE */}
          <div className="job-details-card">
            <Card>
              <CardMedia component="img" image={state.post.logo} style={{ width:'350px',height:'200px' }} />
              <CardContent>
                <Typography variant="h5">{state.post.title}</Typography>
                <Typography variant="subtitle1">{state.post.position}</Typography>
                <Typography variant="body2">{`Posted on: ${state.post.postedAt}`}</Typography>
                <Typography variant="body2">{`Contact email: ${state.post.location}`}</Typography>
                <Typography variant="body2">{`Location: ${state.post.location}`}</Typography>
                <Typography id="hello" variant="body2">{`Job Type: ${state.email}`}</Typography>
                <Typography variant="body1">{state.post.company}</Typography>
              </CardContent>
              <Button variant="contained" color="primary" fullWidth onClick={handleApplyNow}>
                Apply Now
              </Button>
            </Card>
          </div>
        </div>
      );
    

};
export default JobDetail;