import React, { useState } from 'react';
import {
  TextField,
  Button,
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


export const PostJob = () => {
  const { state } = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        company: '',
        jobTitle: '',
        logo: '',
        new: true,
        featured: true,
        position: '',
        role: '',
        level: '',
        url: '',
        datePosted: '',
        contract: 'Full Time',
        location: 'USA Only',
        languages: ['HTML', 'CSS', 'JavaScript'],
        tools: ['React','Django','Sass'],
      });


      const handleInputChange  = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };

      const handleLanguageSelection = (language: string) => {
        const selectedLanguages = formData.languages.includes(language)
          ? formData.languages.filter((lang) => lang !== language)
          : [...formData.languages, language];
        setFormData({ ...formData, languages: selectedLanguages });
      };

      const handleToolSelection = (tool: string) => {
        const selectedTools = formData.tools.includes(tool)
          ? formData.tools.filter((l) => l !== tool)
          : [...formData.tools, tool];
        setFormData({ ...formData, tools: selectedTools });
      };


      const handleChangeSelect = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormData({ ...formData, [name]: value });
      };
    
    
     
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        fetch('http://localhost:3000/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            const email = state.email; // Get the email from state
           navigate(`/home?email=${encodeURIComponent(email)}`);
            // Redirect the user to the blog post page or some other page
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

  return (
      <div className="outer-container">
    <form className="form-container job-posting-form" onSubmit={handleSubmit}>
       <div>
      <h1 className="jobapp">Job Application Form</h1>
    </div>
      <Stack spacing={2}>
        <TextField
          name="company"
          label="Company"
          value={formData.company}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
        name="jobTitle"
        label="Job Title"
        value={formData.jobTitle}
        onChange={handleInputChange}
        fullWidth
      />
        <TextField
        name="logo"
        label="Logo URL"
        value={formData.logo}
        onChange={handleInputChange}
        fullWidth
      />
        <TextField
          name="datePosted"
          label="Date Posted"
          value={formData.datePosted}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          name="position"
          label="position"
          value={formData.position}
          onChange={handleInputChange}
          fullWidth
        />
        
        <InputLabel id="contract-label">Contract</InputLabel>
        <Select
          name="contract"
          label="Contract"
          value={formData.contract}
          onChange={handleChangeSelect}
          fullWidth
        >
          <MenuItem value="Full Time">Full Time</MenuItem>
          <MenuItem value="Part Time">Part Time</MenuItem>
          <MenuItem value="Contract">Contract</MenuItem>
        </Select>
        <InputLabel id="contract-label">Level</InputLabel>
        <Select
          name="level"
          label="Level"
          value={formData.level}
          onChange={handleChangeSelect}
          fullWidth
        >
          <MenuItem value="Full Time">Senior</MenuItem>
          <MenuItem value="Part Time">Junior</MenuItem>
          
        </Select>
        <InputLabel id="contract-label">Role</InputLabel>
        <Select
          name="role"
          label="Role"
          value={formData.role}
          onChange={handleChangeSelect}
          fullWidth
        >
          <MenuItem value="Full Time">Developer</MenuItem>
          <MenuItem value="Part Time">Manager</MenuItem>
          <MenuItem value="Contract">Associate</MenuItem>
        </Select>
        <TextField
          name="location"
          label="Location"
          value={formData.location}
          onChange={handleInputChange}
          fullWidth
        />
             <InputLabel>Select Languages</InputLabel>
        <Stack direction="row">
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.languages.includes('HTML')}
                onChange={() => handleLanguageSelection('HTML')}
              />
            }
            label="HTML"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.languages.includes('CSS')}
                onChange={() => handleLanguageSelection('CSS')}
              />
            }
            label="CSS"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.languages.includes('JavaScript')}
                onChange={() => handleLanguageSelection('JavaScript')}
              />
            }
            label="JavaScript"
          />
          {/* Add more checkboxes for additional languages */}
        </Stack>
        <InputLabel>Select Tools</InputLabel>
        <Stack direction="row">
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.tools.includes('React')}
                onChange={() => handleToolSelection('React')}
              />
            }
            label="React"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.tools.includes('Django')}
                onChange={() => handleToolSelection('Django')}
              />
            }
            label="Django"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.tools.includes('Sass')}
                onChange={() => handleToolSelection('Sass')}
              />
            }
            label="Sass"
          />
          {/* Add more checkboxes for additional languages */}
        </Stack>
        
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Stack>
    </form>
     </div>
  );
};

export default PostJob;
