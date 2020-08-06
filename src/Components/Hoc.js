import React, { Component } from "react";
import Search from "./Search";


const withSearch = WrappedComponent => class extends Component {
    state = {
      searchTerm: "",
    }


    handleSearch = (event) => {
      this.setState({ searchTerm: event.target.value });
    }

    render() {
      return (
        <div>
          <div>
            <input onChange={this.handleSearch} defaultValue={this.state.searchTerm} type="text" placeholder="Search" />
          </div>
          <WrappedComponent searchTerm={this.state.searchTerm} />
        </div>
      );
    }
};

const Hoc = withSearch(Search);
export default Hoc;
