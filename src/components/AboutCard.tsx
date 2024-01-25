import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

interface AboutCardInfo {
  Title: string;
  Body: string;
}

export default function AboutCard({Title, Body}: AboutCardInfo) {
    return (
<Card sx={{ minWidth: 275 , maxWidth: "50%"}}>
      <CardContent>
        <Typography variant="h5" component="div">
        {Title}
        </Typography>
        <Typography variant="body2">
        {Body}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Try Now</Button>
      </CardActions> */}
    </Card>
      );
    }
    