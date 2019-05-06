import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

import Card from '@material-ui/core/Card';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  paper: {

    height: '100%',
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },

  header:{
    title:'blue'
  },
  card:{
      justifyItems: 'center',
      textAlign: 'center',
    fontSize:'2em',

      padding: theme.spacing.unit * 2,
  },
  media: {
    justifyContent: 'center',
    alignItems: 'center',
    height:'300px',
    width:'500px',

     // 16:9
  },
 li:{
   padding: theme.spacing.unit * 2,
   textAlign: 'left',
   color: theme.palette.text.secondary,
   fontSize:'1.6em'
 }
});

function CenteredGrid(props) {
  const { classes } = props;
  let array=[]


  let i=0;
  console.log(props.data);
  for( i in props.data.webcams){
    array[i]=props.data.webcams[i].image;
  }
  if(array[0]==null){
    array[0]='http://cdn.shopify.com/s/files/1/1439/2464/files/FullSizeRender_-_Copy_2048x2048.jpg?v=1510875924'
  }
let lifts=[];

console.log(props.data.lifts);
let j=0;
for( i in props.data.lifts){
  if(props.data.lifts[i]==props.data.lifts.status){
  lifts=props.data.lifts[i]
}
}


var keys = Object.keys(lifts);
const listItems = keys.map((number) =>
  <li>{number}: {lifts[number]}</li>
);
let weather=[]
for( i in props.data.weather){

  weather[i]=props.data.weather[i]
}

console.log(weather);
  return (
    <div className={classes.root}>
      <Grid container spacing={24} justify='center'>
        <Grid item xs={12}>

          <Paper className={classes.paper}>      <Typography component="h2" variant="h2" gutterBottom>{props.data.name} </Typography></Paper>
        </Grid>
         <Card className={classes.card}>
        <CardHeader


        title="Live Look In"

         />
        <Grid item xs={6}>

          <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          alignItem='center'

          image={array[0]}
          title="Contemplative Reptile"
        />



        </Grid>
          </Card>
        <Grid item xs={6} >
          <Paper className={classes.li}>

            <ul>{listItems}</ul>
          </Paper>

        </Grid>
        <Grid item xs={6} justify={'center'} padding-left={'50%'}>

          <Paper className={classes.paper}>
          <Typography component="h3" variant="h3" gutterBottom>Weather </Typography>
          <Typography component="h4" variant="h4" gutterBottom>{weather} </Typography>
          {weather.text}

          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}
const mapStateToProps = state => ({

});
CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
