import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Paper } from '@mui/material';
import { NavLink,useNavigate } from 'react-router-dom';

export default function AdminComponent() {
  const [serverResponse, setServerResponse] = useState('');
  const navigate = useNavigate()
  const handleButtonClick = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/admin', {
        method: 'POST', // Adjust the method as needed (POST, GET, etc.)
        // Add headers, body, or other configurations as required for your API
      });

      const data = await response.text();
      setServerResponse(data); // Update state with the server response
      navigate("/admin/profile")
      console.log(data); // Log the response to the console
    } catch (error) {
      navigate("/")
      console.error('Error fetching data:', error);
    }
  };

  return (
    
    <div>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Admin LogIn
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  required
                  // Add more props as needed
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  required
                  type="password"
                  // Add more props as needed
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={handleButtonClick} // Attach the click handler function
                >
                  Log In
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
      <NavLink to="/admin/profile">{serverResponse}</NavLink>
    </div>
  );
}
