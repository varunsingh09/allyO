import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchList from "./SearchList";
import { fetchHotels } from "../actions/HomeAction";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }


  componentDidUpdate = () => {

    const { searchTerm } = this.props;
    //console.log("----------------------",searchTerm,)
    if (searchTerm.length > 4) {
      this.props.fetchHotels(searchTerm);
    }

  }


  render() {
    const { searchTerm } = this.props;

    return (
      <div>
        <div>
          <div>
            <label htmlFor="psw"><b>{this.props.pending === true ? "Searching..." : "" ? this.props.error : this.props.error}</b></label>
            <h2>Search List</h2>
          </div>
        </div>
        <div>
          {this.props.data !== undefined && this.props.data
            .filter(hotel => `${hotel.name}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
            .map(hotel => <SearchList key={hotel.name} {...hotel} />)}
        </div>

      </div>
    );
  }
}



const mapStateToProps = (state) => {
  let { HomeReducer: { pending, error, results } } = state;
  return {
    pending: pending,
    error: error,
    data: results
  };

};

const mapDispatchToProps = dispatch => ({
  fetchHotels: (params) => dispatch(fetchHotels(params))
});

Search.propTypes = {
  searchTerm: PropTypes.string,
  fetchHotels: PropTypes.func,
  data: PropTypes.object,
  pending: PropTypes.bool,
  error: PropTypes.string
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

