import React from "react";
import { connect } from "react-redux";
import { fetchResort} from "../../actions/mountainAction";
import Card from './card'

class ResortList extends React.Component {
  componentDidMount() {
    console.log(this);
    this.props.dispatch(fetchResort(this.props.match.params.id));
  }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    console.log(this);
    return (

      <Card data={this.props.resort}/>
    );
  }
}

const mapStateToProps = state =>({

  resort: state.resort.items,
  loading: state.resort.loading,
  error: state.resort.error
});
export default connect(mapStateToProps)(ResortList);
