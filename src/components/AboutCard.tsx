import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export default function AboutCard() {
    return (
<Card sx={{ minWidth: 275 , maxWidth: "50%"}}>
      <CardContent>
        <Typography variant="h5" component="div">
        Personalized Precision
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      );
    }