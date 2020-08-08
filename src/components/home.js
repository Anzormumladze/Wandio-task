import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGamesDashboard } from "../actions/fetch-data";

export const Home = ({ GetGames, isLoading }) => {
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

export default connect(mapStateToProps, mapDispacthToProps)(Home);
