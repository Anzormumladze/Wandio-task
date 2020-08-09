import React from "react";
import AppBar from "../components/appBar";
import Table from "../components/table";

const TeamDetails = ({ history }) => {
  const {
    location: { state },
  } = history;
  console.log(state, "vnaxot");
  let changeableData;
  state.team === 1
    ? (changeableData = state.state.team.home_team)
    : (changeableData = state.state.team.visitor_team);
  console.log(changeableData, "---__---");
  return (
    <div>
      <AppBar page={"Team Details"} homePage={true} history={history} />
      <div>
        <Table teamDetails={changeableData} />
      </div>
    </div>
  );
};

export default TeamDetails;
