import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Data from './ResortData';
import Video from './Video'
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },


});
let title='';
const imgMyimageexample ='https://www.kiwitravelnz.com/images/package_categories/Ski%20Inside%20Banner.JPG?resize=1&w=1488&h=432';
const divStyle = {
  width: '100%',
  minHeight: '400px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover',
};

function CenteredGrid(props) {
  const { classes } = props;
  const location=props.location;
  console.log(props.location);
  if(props.location==='NH'){
    title="New Hampsire"
  }
  if(props.location==='CO'){
    title="Colorado"
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
        <div className={'img'} style={divStyle}></div>
        </Grid>
        <Grid item xs={6}>

              <Paper className={classes.paper}><Data api={location} /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" Align='left' gutterBottom>
            Ski {title}
          </Typography>
          <Paper className={classes.paper}><Video vid={props.location}/></Paper>
        </Grid>

      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
