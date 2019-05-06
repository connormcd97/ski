

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#53c4f7',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 20,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  margin: {
   margin: theme.spacing.unit,
 },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
      '&:hover': {
      backgroundColor:  theme.palette.grey[200],
    }
    },
  },
});

let id = 0;
function createData(id,name, open,closed,percent ) {


  return { id, name,open, closed, percent};
}

const rows = [

];

function CustomizedTable(props) {
  const { classes } = props;
  console.log(props);
  props.resort.map(data => (
  rows.push(createData(data.id,data.name,data.open,data.closed,data.percent))


))



  return (
    <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <CustomTableCell>Resort</CustomTableCell>
          <CustomTableCell numeric>Lifts Open</CustomTableCell>
          <CustomTableCell numeric>Lifts Closed</CustomTableCell>
          <CustomTableCell numeric>Percent Open</CustomTableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => {

          return (

            <TableRow  className={classes.row} key={row.id}>
              <CustomTableCell  component="th" scope="row">
                <Link to={{ pathname: '/mountain/'+row.id, data:row }} >

                  {row.name}
                </Link>
              </CustomTableCell>
              <CustomTableCell numeric>{row.open}</CustomTableCell>
              <CustomTableCell numeric>{row.closed}</CustomTableCell>
              <CustomTableCell numeric>{row.percent}%</CustomTableCell>
            </TableRow>

          );
        })}
      </TableBody>
    </Table>
  </Paper>
);
}

const mapStateToProps = state => ({

});

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
