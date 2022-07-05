import React from "react";
import { Doughnut } from "react-chartjs-2";
import PropTypes from "prop-types";

/**
 *
 * Component General Description:
 * This a custom doughnut chart for the dashboard page.
 */

function CustomDoughnut({ data, options }) {
  return (
    <React.Fragment>
      <Doughnut data={data} options={options} />
    </React.Fragment>
  );
}

// PropTypes
CustomDoughnut.propTypes = {
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

CustomDoughnut.defaultProps = {
  labels: [],
  datasets: [],
};

export default CustomDoughnut;
