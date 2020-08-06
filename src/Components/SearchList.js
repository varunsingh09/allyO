import React from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

const SearchList = props => (
  <div>
    <hr />
    <p>
      <b>Hotel Name:</b>

      {props.name}
    </p>
    <p>
      <b>Website:</b>
      <a href={props.website} target="_blank"
        >{props.website}</a>
    </p>
    <p>
      <b>Room No:</b>

      {props.room.roomNumber}
    </p>
    <p>
      <b>Room Type:</b>

      {props.room.roomType}
    </p>
    <p>
      <b>Guest Name:</b>

      {props.guest.name}
    </p>
    <p>
      <b>Address:</b>

      {props.guest.address}
    </p>
    <p>
      <b>Phone No:</b>

      {props.guest.phone}
    </p>
    <hr />
  </div>
);

SearchList.propTypes = {
  name: PropTypes.string,
};
export default SearchList;
