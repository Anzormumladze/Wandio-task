import React from "react";
import AppBar from "../components/appBar";
import Table from "../components/table";
import PropTypes from "prop-types";

const TeamDetails = ({ history }) => {
  const {
    location: { state },
  } = history;
  let changeableData;
  state.team === 1
    ? (changeableData = state.state.team.home_team)
    : (changeableData = state.state.team.visitor_team);
  return (
    <div>
      <AppBar page={"Team Details"} homePage={true} history={history} />
      <div>
        <Table teamDetails={changeableData} />
      </div>
    </div>
  );
};

TeamDetails.propTypes = {
  history: PropTypes.object,
};

export default TeamDetails;
