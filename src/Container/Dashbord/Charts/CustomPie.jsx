import React from "react";
import { Pie } from "react-chartjs-2";
import PropTypes from "prop-types";

/**
 *
 * Component General Description:
 * This a custom pie chart for the dashboard page.
 */

function CustomPie({ data, options }) {
  return (
    <React.Fragment>
      <Pie data={data} options={options} />
    </React.Fragment>
  );
}

// PropTypes
CustomPie.propTypes = {
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

CustomPie.defaultProps = {
  labels: [],
  datasets: [],
};

export default CustomPie;
