import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGamesDashboard } from "../actions/fetch-data";
import AppBar from "../components/appBar";
import Table from "../components/table";
import PropTypes from "prop-types";

export const Home = ({ GetGames, gamesData }) => {
  const { data } = gamesData;
  useEffect(() => {
    GetGames();
    return () => {
      console.log("cleanup");
    };
  }, [GetGames]);
  return (
    <div>
      <div>
        <AppBar page={"Home"} />
      </div>
      <div style={{ marginTop: 50 }}>
        <Table gamesData={data} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.gamesData.isLoading,
  gamesData: state.gamesData.data,
});

const mapDispacthToProps = (dispatch) => {
  return {
    GetGames: () => dispatch(getGamesDashboard()),
  };
};

Home.propTypes = {
  GetGames: PropTypes.func,
  gamesData: PropTypes.object,
};

export default connect(mapStateToProps, mapDispacthToProps)(Home);
