import React, { Component } from 'react'
import Chart from 'chart.js/auto';
import { PRIX_DOMINANTS_DETAILS_RIZ, STOCK_RIZ, VARIATIONS_RIZ_PIRX_STOCK, FOURCHETTE_PRIX_RIZ, DATA_STOCK_REGULATION } from '../../mocks/mock-arm-dashboard';
import CustomLinesGraph from './Charts/CustomLinesGraph'
import TableVariationPrixDominantStock from './Charts/TableVariationPrixDominantStock'
import TableFourchettePrix from './Charts/TableFourchettePrix'
import ResumeStockRegulation from './Charts/ResumeStockRegulation'

function Charts() {

    let option1 = {
        responsive : true,
        plugins:{
          legend : {position: "bottom"},
          title:{
            display : true,
            text :"Prix dominants détails du riz en FCFA/kg",
            position: "top" 
          }
        },
    
        scales:{
          y:{
            display: true,
            title:{ display: true, text: 'FCFA/kg' }
          },
          x:{
            display: true,
            title:{ display: true, text: 'Region' }
          }
        }
    }

    let option2 = {
      responsive : true,
      plugins:{
        legend : {position: "bottom"},
        title:{
          display : true,
          text :"Stock de riz en tonnes",
          position: "top" 
        }
      },
  
      scales:{
        y:{
          display: true,
          title:{ display: true, text: 'Tonne' }
        },
        x:{
          display: true,
          title:{ display: true, text: 'Region' }
        }
      }
  }
    
    return (
      <div className="section">
        <CustomLinesGraph data={PRIX_DOMINANTS_DETAILS_RIZ} options={option1} />
        <CustomLinesGraph data={STOCK_RIZ} options={option2} />
        <TableVariationPrixDominantStock rows={VARIATIONS_RIZ_PIRX_STOCK} />
        <ResumeStockRegulation data={DATA_STOCK_REGULATION} />
        <TableFourchettePrix rows={FOURCHETTE_PRIX_RIZ} />
      </div>
    )
}


export default Charts