import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Main from './Main'
import axios from 'axios'
import Data from './ResortData';
import Video from './Video'
import { connect } from "react-redux";
import { logoutUser,_deleteUser  } from "../../actions/authActions";



class Dashboard extends Component {

  onLogoutClick = e => {
    console.log(e);
    e.preventDefault();
    console.log(this.props);
    this.props.logoutUser();
  };
  delete(user) {
          console.log(user.id);
          this.props._deleteUser(user);
}
render() {
    const { user } = this.props.auth;
    console.log(user);
return (
      <div style={{ height: "75vh" }} >
        <Main location={user.location}/>

          <div className="col s12 center-align">

            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
             <button onClick={() => this.delete(user.id)}className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser,_deleteUser}
)(Dashboard);
