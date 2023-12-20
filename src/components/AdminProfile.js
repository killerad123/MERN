import * as React from 'react';
import { TextField, Button, Container, Typography, Grid, Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { NavLink, useNavigate } from 'react-router-dom';
export default function AdminProfile() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/getAllMovies')
      .then(response => response.json())
      .then(result => {
        setData(result); // Set the fetched data into state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const navigate = useNavigate()
  const handleButtonClick = async (event) => {
    
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/admin/upload');

      const data = await response.text();
      // setServerResponse(data); // Update state with the server response
      navigate("/admin/profile")
      console.log(data); // Log the response to the console
    } catch (error) {
      navigate("/")
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          jawan
        </Typography>
        <Typography variant="body2" color="text.secondary">
          niceone
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{backgroundColor:"cyan"}}>Book</Button>
      </CardActions>
    </Card>

    <div>
    <Container sx={{marginTop:"50px"}} maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Upload Movie
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  variant="outlined"
                  fullWidth
                  required
                  // Add more props as needed
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Desc"
                  variant="outlined"
                  fullWidth
                  required
                  type="text"
                  // Add more props as needed
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Photo"
                  variant="outlined"
                  fullWidth
                  required
                  type="text"
                  // Add more props as needed
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                onClick={handleButtonClick}
                  variant="contained"
                  color="primary"
                  type="submit"
                  // Attach the click handler function
                >
                  Upload
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
    <NavLink to="/">
    <Button size="small" sx={{marginTop:"50px",backgroundColor:"red"}}>Log Out</Button>
    </NavLink>
    </div>
  )
}
