import React from 'react'
import { Link } from 'react-router-dom'
import './StarshipDetail.css'

function StarshipDetail(props) {
  const {name, crew, length, passengers, manufacturer, cost_in_credits} = props.location.state.starships
  return (
    <>
      <div className="Detail-Card">
        <div className="Detail-Items">
          <h1>{name}</h1>
          <table>
            <tr>
              <th>Manufacturer:</th>
              <td></td>
              <td>{manufacturer}</td>
            </tr>
            <tr>
              <th>Crew Count:</th>
              <td></td>
              <td>{crew} memebers</td>
            </tr>
            <tr>
              <th>Passengers:</th>
              <td></td>
              <td>{passengers}</td>
            </tr>
            <tr>
              <th>Total Length:</th>
              <td></td>
              <td>{length} ft.</td>
            </tr>
            <tr>
              <th>Cost:</th>
              <td></td>
              <td>{cost_in_credits} credits</td>
            </tr>
          </table>
          <Link to='/'>
            <button>Return</button>
          </Link>
        </div>
      </div>
    </>
  )
}


export default StarshipDetail