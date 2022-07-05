import { Icon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

const useStyles = makeStyles((theme) => ({
  stickerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: "20px",
    gap: "10px",
    width: "11rem",
    height: "11rem",
    boxShadow: "0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
    paddingBottom: "5px",
    [theme.breakpoints.down("sm")]: {
      gap: "5px",
      width: "8rem",
      height: "12rem",
    },
  },
  stickerIcon: {
    width: "100%",
    paddingLeft: "10px",
    flex: 0.4,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  stickerText: {
    width: "100%",
    paddingLeft: "10px",
    flex: 0.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  stickerValue: {
    width: "100%",
    paddingLeft: "10px",
    flex: 0.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontWeight: "bold",
  },
}));

function StickerChart({ type, text, value }) {
  const classes = useStyles();
  return (
    <div className={classes.stickerContainer}>
      <div className={classes.stickerIcon}>
        {type === "entree" ? (
          <CallReceivedIcon style={{ fontSize: "5rem", color: "#03a9f4" }} />
        ) : type === "sortie" ? (
          <CallMadeIcon style={{ fontSize: "5rem", color: "#4caf50" }} />
        ) : type === "dommage" ? (
          <BrokenImageIcon style={{ fontSize: "5rem", color: "#ef5350" }} />
        ) : type === "reste" ? (
          <CheckIcon style={{ fontSize: "5rem", color: "#ba68c8" }} />
        ) : null}
      </div>
      <div className={classes.stickerText}>{text}</div>
      <div className={classes.stickerValue}>{value + " Tonnes"}</div>
    </div>
  );
}

export default StickerChart;
