import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './JobDetails.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface JobDetailsProps {
  title: string;
  company: string;
  postedDate: string;
  contactEmail: string;
  location: string;
  jobType: string;
  description: string;
  imageUrl: string;
}

const JobDetails: React.FC<JobDetailsProps> = ({
  title,
  company,
  postedDate,
  contactEmail,
  location,
  jobType,
  description,
  imageUrl,
}) => {
  return (
    <div className="job-details-container">
      <div className="job-details-card">
        <Card>
          <CardMedia component="img" image="https://img.freepik.com/free-vector/realistic-background-futuristic-style_23-2149129125.jpg" height="200" />
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1">{company}</Typography>
            <Typography variant="body2">{`Posted on: ${postedDate}`}</Typography>
            <Typography variant="body2">{`Contact email: ${contactEmail}`}</Typography>
            <Typography variant="body2">{`Location: ${location}`}</Typography>
            <Typography variant="body2">{`Job Type: ${jobType}`}</Typography>
            <Typography variant="body1">{description}</Typography>
          </CardContent>
          <Button variant="contained" color="primary" fullWidth>
            Apply Now
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default JobDetails;
