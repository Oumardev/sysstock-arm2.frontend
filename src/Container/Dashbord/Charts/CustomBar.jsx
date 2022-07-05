import React from "react";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
/**
 *
 * Component General Description:
 * This a custom bar chart for the dashboard page.
 */

function CustomBar({ data, options }) {
  return (
    <React.Fragment>
      {data?.labels?.length === 0 ? (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <SentimentVeryDissatisfiedIcon
            style={{ fontSize: "5rem", color: "#ef5350" }}
          />
          <Typography variant="h5">Aucunes données trouvées</Typography>
        </div>
      ) : (
        <Bar data={data} options={options} />
      )}
    </React.Fragment>
  );
}

// PropTypes
CustomBar.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        data: PropTypes.array,
        fill: PropTypes.bool,
        backgroundColor: PropTypes.arrayOf(PropTypes.string),
        borderColor: PropTypes.string,
        borderWidth: PropTypes.number,
      })
    ),
  }).isRequired,
  options: PropTypes.object,
};

CustomBar.defaultProps = {
  labels: [],
  datasets: [],
};

export default CustomBar;
