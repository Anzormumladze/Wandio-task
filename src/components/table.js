import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({ gamesData, history, gameDetails }) {
  const classes = useStyles();
  const data = gameDetails ? null : gamesData.slice(0, 10);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: 20, fontWeight: "bold" }}>
              Home Team Name
            </TableCell>
            <TableCell style={{ fontSize: 20, fontWeight: "bold" }}>
              Visitor Team name
            </TableCell>
            <TableCell style={{ fontSize: 20, fontWeight: "bold" }}>
              Game score
            </TableCell>
            {gameDetails ? (
              <TableCell style={{ fontSize: 20, fontWeight: "bold" }}>
                Season/Status
              </TableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {gameDetails ? (
            <TableRow key={gameDetails.team.id}>
              <TableCell component="th" scope="row">
                {gameDetails.team.home_team.full_name}
              </TableCell>
              <TableCell>{gameDetails.team.visitor_team.full_name}</TableCell>
              <TableCell>{`${gameDetails.team.home_team_score} - ${gameDetails.team.visitor_team_score}`}</TableCell>
              <TableCell>{`${gameDetails.team.season} / ${gameDetails.team.status}`}</TableCell>
            </TableRow>
          ) : (
            data.map((team) => (
              <TableRow key={team.id}>
                <TableCell component="th" scope="row">
                  {team.home_team.full_name}
                </TableCell>
                <TableCell>{team.visitor_team.full_name}</TableCell>
                <TableCell
                  onClick={() => history.push("/GameDetails", { team })}
                >{`${team.home_team_score} - ${team.visitor_team_score}`}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

SimpleTable.propTypes = {
  gamesData: PropTypes.array,
  history: PropTypes.object,
  gameDetails: PropTypes.object,
};
