import React, { Component } from 'react'
import up from '../../assets/up.png'
import down from '../../assets/down.jpg'
import market from '../../assets/market.png'
import './styles.css'

export class Info extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card">
            <img src={up} alt="up" className='up-img' />
            <p>Produit entrant</p>
            <p className='value'>1230</p>
        </div>
        <div className="card">
            <img src={down} alt="up" className='down-img' />
            <p>Produit vendu</p>
            <p className='value'>1000</p>
        </div>
        <div className="card">
            <img src={market} alt="up" className='down-img' />
            <p>Marché disponible</p>
            <p className='value'>2230</p>
        </div>
      </div>
    )
  }
}

export default Info