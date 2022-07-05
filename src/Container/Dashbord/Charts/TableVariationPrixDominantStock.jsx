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

export default function TableVariationPrixDominantStock({ rows }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <h2 style={{textAlign:'center'}}> Variation du prix dominant et du stock</h2>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={6}>
              Variation du prix
            </TableCell>
            <TableCell align="center" colSpan={2}>
              Variation du stock
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Region</TableCell>
            <TableCell align="center">Local</TableCell>
            <TableCell align="center">Parf Luxe</TableCell>
            <TableCell align="center">Parf Ord</TableCell>
            <TableCell align="center">Non Parf</TableCell>
            <TableCell align="center">Indien</TableCell>
            <TableCell align="center">Local</TableCell>
            <TableCell align="right">Import</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.region}</TableCell>
              <TableCell align="center">
                {showVariationArrow(row.varRizPrix.local.variation)}
                {row.varRizPrix.local.value}
              </TableCell>
              <TableCell align="center">
                {showVariationArrow(row.varRizPrix.parfLuxe.variation)}
                {row.varRizPrix.parfLuxe.value}
              </TableCell>
              <TableCell align="center">
                {showVariationArrow(row.varRizPrix.parfOrd.variation)}
                {row.varRizPrix.parfOrd.value}
              </TableCell>
              <TableCell align="center">
                {showVariationArrow(row.varRizPrix.nonParf.variation)}
                {row.varRizPrix.nonParf.value}
              </TableCell>
              <TableCell align="center">
                {showVariationArrow(row.varRizPrix.indien.variation)}
                {row.varRizPrix.indien.value}
              </TableCell>
              <TableCell align="center">
                {showVariationArrow(row.varRizStock.local.variation)}
                {row.varRizStock.local.value}
              </TableCell>
              <TableCell align="right">
                {showVariationArrow(row.varRizStock.import.variation)}
                {row.varRizStock.import.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
