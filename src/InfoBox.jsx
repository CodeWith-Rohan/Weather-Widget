import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INIt_URL = 
    "https://images.unsplash.com/photo-1652500372113-0620f3d0d894?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

     const HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=612x612&w=is&k=20&c=dJtOKLvUlkbpntWPyrs8eM9chVZ7VObLdWarFiFopWk="
     const COLD_URL = "https://images.unsplash.com/photo-1725292025469-12f629e98e84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     const RAIN_URL = "https://images.unsplash.com/photo-1558920778-a82b686f0521?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
    <div className="InfoBox">  
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity >80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} {
          info.humidity >80 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />
         }

        </Typography>
        <Typography variant="body2" color= 'text.secondary' component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp" = {info.tempMax}&deg;C</p>
         <p>The weather can be as described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
} 