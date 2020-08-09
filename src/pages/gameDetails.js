import React from "react";
import AppBar from "../components/appBar";
import Table from "../components/table";

const gameDetails = ({ history }) => {
  const { state } = history.location;
  return (
    <div>
      <div>
        <AppBar page={"Game Details"} homePage={true} history={history} />
      </div>
      <div>
        <Table gameDetails={state} />
      </div>
    </div>
  );
};

export default gameDetails;
