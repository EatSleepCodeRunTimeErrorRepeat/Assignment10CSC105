import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

export default function Content() {
  const isScreenLarge = window.innerWidth >= 900;

  return (
    <Grid container direction="column">
      <Grid item>
        <Box
          sx={{
            bgcolor: "grey.100",
            p: 2,
          }}
        >
          <Typography variant="h4" component="div">
            Welcome to My Website
          </Typography>
          <Typography variant="body1" component="div">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae felis purus. Pellentesque non egestas est. Donec
              enim felis, pulvinar ac risus eget, eleifend accumsan sem.
              <br />
              <br />
              Curabitur suscipit ornare nunc, a consectetur dolor efficitur vel.
              Vestibulum consequat, nunc condimentum imperdiet rhoncus, neque
              augue rhoncus nunc, nec lobortis erat quam et lacus. Praesent
              pretium a odio a malesuada. Nulla feugiat a dolor sed imperdiet.
            </p>
          </Typography>
        </Box>
      </Grid>
      <Grid container spacing={2} columns={{ xs: 12, sm: 6 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQId1AcEyCoBQPibiIPqt1F98YvFw1dsuCQ&usqp=CAU"
              alt="Image Title"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Card description goes here.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {!isScreenLarge && (
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQId1AcEyCoBQPibiIPqt1F98YvFw1dsuCQ&usqp=CAU"
                alt="Image Title"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Card description goes here.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQId1AcEyCoBQPibiIPqt1F98YvFw1dsuCQ&usqp=CAU"
            alt="Image Title" 
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                     Card description goes here.
                </Typography>
            </CardContent>
             </Card>
        </Grid>
        </Grid>
    </Grid>   
    );
}