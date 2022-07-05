import React, {useState} from "react";
import { Bar, Pie } from 'react-chartjs-2';
import PropTypes from "prop-types";

/**
 *
 * Component General Description:
 * This a custom line chart for the dashboard page.
 */

function CustomLinesGraph({ data, options }) {

  const [showPie, setShowPie] = useState(false)
  return (
    <React.Fragment>
      <button className="circ-btn" onClick={() => setShowPie(!showPie)} >{ showPie? 'Revenir a la forme initiale' : 'Afficher sous forme circulaire' }</button>
      {
        !showPie ?
        <Bar data={data} options={options} />
        : 
        <Pie data={data} options={options} />
      }
    </React.Fragment>
  )
}

// PropTypes
CustomLinesGraph.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        data: PropTypes.array,
        fill: PropTypes.bool,
        backgroundColor: PropTypes.arrayOf(PropTypes.string),
        borderColor: PropTypes.arrayOf(PropTypes.string),
        borderWidth: PropTypes.number,
      })
    ),
  }).isRequired,
  options: PropTypes.object,
};

CustomLinesGraph.defaultProps = {
  labels: [],
  datasets: [],
};

export default CustomLinesGraph;
