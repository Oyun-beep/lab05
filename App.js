import React from 'react'
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({

  TextClass: {
    fontSize: '0.5rem',
    '@media (min-width:600px)': {
    fontSize: '0.7rem',
    },
    [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
    },
},

  appBar: { 
    backgroundColor: "purple",
    height: "150px",
    width: "100%",
  },

  titleBar: {
    marginTop: "50px",
    fontSize: '1.4rem',
      '@media (min-width:600px)': {
      fontSize: '1.9rem',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
      },
  },

  
  menu: {
    backgroundColor: "indigo",
    height: "50px",
    position: "relative",
    display:"flex",

  },
  buttonShape: {
    color : "#D8B7F1",
    margin: theme.spacing(0), 
  },
  
  BoxTaaruulalt: {
    position: "relative",
    marginLeft : "19%",
    width : "60%",
    height: "20%",
  },

  paper: {
    maxWidth: 800,
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(0),
  },

  classAvatar: {
    margin: "5px"
  },
  
  TaaruulahIcon: {
    marginLeft: "80%",
    marginTop: "-18%",
  },

  fixText: {
    padding: theme.spacing(0),
    marginTop: "5%",
    marginLeft: "-40%",
  }, 

  root: {
    position: "relative",
    maxWidth : "60%",
    margin : "3%",
    marginLeft : "19%"
  },
  
  TaaruulahPlay: {
      display: "flex",
      position: "relative",
      maxWidth : "60%",
      margin : "3%",
      marginLeft : "19%",
      backgroundColor: "#A59CA8 "
  },

  details: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white"
    
  },
  content: {
    flex: "1 0 auto",
    backgroundColor: "white"
  },

  playIcon: {
    margin: "10%",
    width: "50%",
    marginTop : "12%",
  },

  ButtonTaaruulalt: {
    position: "relative",
    display:"flex",
    marginTop: "-16px",
    marginRight: "20px",
    justifyContent: "flex-end",
  },

}));


const message = `Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante `;
 
function App() {
  const classes = useStyles();
  
  return (
    <div className="App">

      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography className = {classes.titleBar} variant="h6" color = "white" >
          <b>Name & Title</b>
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Box>
        <Box className = {classes.menu}>
          <Button className = {classes.buttonShape}>
              <Typography className = {classes.TextClass}>
              OVERVIEW
              </Typography>
          </Button>
          <Button className = {classes.buttonShape}>
              <Typography className = {classes.TextClass}>
              FEATURES
              </Typography>
          </Button>
          <Button className = {classes.buttonShape}>
              <Typography className = {classes.TextClass}>
              DETAILS
              </Typography>
          </Button>
          <Button className = {classes.buttonShape}>
              <Typography className = {classes.TextClass}>
              TECHNOLOGY
              </Typography>
          </Button>
          <Button className = {classes.buttonShape}>
                <Typography className = {classes.TextClass}>
                FAQ
                </Typography>
          </Button >
          </Box>
      </Box>

      <Box className = {classes.ButtonTaaruulalt}>
          <Fab size="small" color = "primary" edge="start">
            <AddIcon />
          </Fab>
      </Box >
          
      <Card className={classes.TaaruulahPlay}>
            <Fab className = {classes.playIcon}>
              <PlayArrowIcon />
            </Fab>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                Features
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {message}
                </Typography>
              </CardContent>
              <CardActions>
              <Button size="medium" color="primary"><b>READ OUR FEATURES</b></Button>  
        </CardActions>
      </div>
    </Card>
        <Box className ={classes.BoxTaaruulalt} border = {1} borderRadius={16} boxShadow = "0 5px 7px 2px rgba(147, 7, 188 , .3)">
            <Typography variant = "h4" className = {classes.fixText}>Details</Typography><br></br>
                <IconButton className = {classes.TaaruulahIcon}>
                  <MoreVertIcon />
                </IconButton>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing= {2}>
              <Grid item>
                <Avatar className = {classes.classAvatar}>A</Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{message}</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing= {2}>
              <Grid item>
                <Avatar className = {classes.classAvatar}>A</Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{message}</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing= {2}>
              <Grid item>
                <Avatar className = {classes.classAvatar}>A</Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{message}</Typography>
              </Grid>
            </Grid>
          </Paper>
          </Box>
          
          <Box className = {classes.ButtonTaaruulalt}>
              <Button variant = "contained" color = "primary">
                  View Source
              </Button>
          </Box >
    </div>
  );
}

export default App;
