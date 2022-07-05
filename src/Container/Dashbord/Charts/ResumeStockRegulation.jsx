import { Paper } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import React from "react";

function showArrowVariation(variation) {
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
}

function ResumeStockRegulation({ data }) {
  return (
    <Paper
      elevation={5}
      sx={{
        width: "35%",
        display: "flex",
        flexDirection: "column",
        padding: "5px",
        margin: "10px"
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "2rem",
          backgroundColor: "rgb(221,235,247)",
        }}
      >
        <span>Stock de regulation&nbsp;(Tonnes)</span>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "2rem",
          backgroundColor: "rgb(169,208,142)",
        }}
      >
        <span>Brisure Parfumée</span>
        <strong>{data.brisureParf}</strong>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "2rem",
          backgroundColor: "rgb(255,230,153)",
        }}
      >
        <span>Brisure Non Parfumée</span>
        <strong>{data.brisureNonParf}</strong>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "2rem",
          backgroundColor: "rgb(180,198,231)",
        }}
      >
        <span>Entier ou Intermédiare</span>
        <strong>{data.entierOuIntermed}</strong>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "2rem",
          backgroundColor: "rgb(248,203,173)",
        }}
      >
        <span>Total Disponible</span>
        <strong>{data.totalDispo}</strong>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "2rem",
          backgroundColor: "rgb(221,235,247)",
        }}
      >
        <span>Stock sous douane</span>
        <strong>{data.stockSousDouane}</strong>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "2rem",
          backgroundColor: "rgb(169,208,142)",
        }}
      >
        <span>Stock riz Local</span>
        <strong>{data.stockRizLocal}</strong>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "2rem",
          backgroundColor: "rgb(248,203,173)",
        }}
      >
        <span>Totaux</span>
        <strong>{data.totaux}</strong>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "2rem",
          backgroundColor: "rgb(255,230,153)",
        }}
      >
        <span>Variation de la semaine en %</span>
        {showArrowVariation(data.variationSemaine.variation)}
        <strong>{data.variationSemaine.value}</strong>
      </div>
    </Paper>
  );
}

export default ResumeStockRegulation;
