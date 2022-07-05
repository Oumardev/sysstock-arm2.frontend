import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { makeStyles } from "@mui/styles";
import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const showVariationArrow = (variation) => {
  switch (variation) {
    case "hausse":
      return <ArrowUpwardIcon sx={{ color: "green" }} />;
    case "baisse":
      return <ArrowDownwardIcon sx={{ color: "red" }} />;
    case "static":
      return <ArrowForwardIcon sx={{ color: "yellow" }} />;
    default:
      return null;
  }
};

export default function TableFourchettePrix({ rows }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <h2 style={{textAlign:'center'}}>Fourchette de prix</h2>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={6}>
              Riz Brisé
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Region</TableCell>
            <TableCell align="center">Local</TableCell>
            <TableCell align="center">Parf Luxe</TableCell>
            <TableCell align="center">Parf Ord</TableCell>
            <TableCell align="center">Non Parf</TableCell>
            <TableCell align="center">Indien</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.region}</TableCell>
              <TableCell align="center">{row.varRizPrix.local.value}</TableCell>
              <TableCell align="center">
                {row.varRizPrix.parfLuxe.value}
              </TableCell>
              <TableCell align="center">
                {row.varRizPrix.parfOrd.value}
              </TableCell>
              <TableCell align="center">
                {row.varRizPrix.nonParf.value}
              </TableCell>
              <TableCell align="center">
                {row.varRizPrix.indien.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
