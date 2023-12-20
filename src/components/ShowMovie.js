import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { NavLink, useNavigate ,useParams} from 'react-router-dom';
export default function MultiActionAreaCard() {
    const navigate = useNavigate();
    const params = useParams(); // Access the URL parameters
  console.log(params)
    const handleButtonClick = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch(`http://localhost:5000/${params.movieName}`);
  
        const data = await response.text();
        navigate("/");
        console.log(data);
      } catch (error) {
        navigate("/login");
        console.error('Error fetching data:', error);
      }
    };
    return (
        <>
            <Card sx={{ height: "70vh", display: 'flex', flexDirection: 'column' }}>
                <CardActionArea sx={{ height: "100%", display: 'flex', justifyContent: "space-between" }}>
                    <div style={{ width: '50%' }}>
                        <CardMedia
                            component="img"
                            height="500"
                            image="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                            alt="green iguana"
                            sx={{ width: '100%', height: '100%' }} // Adjust the width and height as needed
                        />
                    </div>
                    <CardContent style={{ width: '50%', padding: '16px' }}>
                        <Grid container spacing={2} direction="column">
                            <Grid item>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ alignSelf: 'center' }}>
                    <Button
                    onClick={handleButtonClick}
                        sx={{
                            height: '80px',
                            width: '200px',
                            fontSize: '28px',
                            backgroundColor: '#0061A4',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#004977', // Adjust the hover color as needed
                            },
                        }}
                        color="primary"
                    >
                        Book
                    </Button>
                </CardActions>
            </Card>
            <NavLink to="/">
                <Button size="large" sx={{
                    backgroundColor: "#0061A4",
                    '&:hover': {
                        backgroundColor: '#004977',
                    },
                    color: "white",
                    fontSize: "20px"
                }}
                >Back
                </Button>
            </NavLink>
        </>
    );
}
