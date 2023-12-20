import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

export default function MediaCard() {
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

  return (
    <>
      {data.map((item, index) => (
        <div style={{width:"500px"}} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desc} 
              </Typography>
            </CardContent>
            <CardActions>
              <NavLink to={`/${item.title}`}>
                <Button size="small" sx={{ backgroundColor: "cyan", }}>Book</Button>
              </NavLink>
            </CardActions>
          </Card>
        </div>
      ))}
    </>
  );
}
