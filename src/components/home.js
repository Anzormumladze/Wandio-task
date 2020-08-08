import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGamesDashboard } from "../actions/fetch-data";
import PropTypes from "prop-types";

export const Home = ({ GetGames }) => {
  useEffect(() => {
    GetGames();
    return () => {
      console.log("cleanup");
    };
  }, [GetGames]);
  return <div>...</div>;
};

const mapStateToProps = (state) => ({
  isLoading: state.gamesData.isLoading,
});

const mapDispacthToProps = (dispatch) => {
  return {
    GetGames: () => dispatch(getGamesDashboard()),
  };
};

Home.propTypes = {
  GetGames:PropTypes.object
}

export default connect(mapStateToProps, mapDispacthToProps)(Home);
