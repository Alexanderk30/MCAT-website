import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export default function AboutCard() {
    return (
<Card sx={{ minWidth: 275 , maxWidth: "50%"}}>
      <CardContent>
        <Typography variant="h5" component="div">
        Personalized Precision
        </Typography>
        <Typography variant="body2">
        Unleash the power of a study plan designed just for you. Input your strengths, weaknesses, and time constraints, and watch as the creator generates a meticulously curated roadmap to success.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Try Now</Button>
      </CardActions>
    </Card>
      );
    }