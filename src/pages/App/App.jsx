import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import { getAllStarships } from '../../services/sw-api'
import StarshipDetail from '../StarshipDetail/StarshipDetail'

class App extends React.Component {
  state = {
    starships: []
  }


  async componentDidMount() {
    const starships = await getAllStarships()
    this.setState({
      starships: starships.results
    })
    console.log(this.state.results)
  }

  render() {
    return (
        <div className="App">
          <h1 className="App-Title">React Star Wars</h1>
          <Switch>
            <Route exact path="/" render={() => 
              <div className="App-Main">
                {this.state.starships.map((ship, id) => 
                  <Link
                    to={{
                      pathname: `starships/${id}`,
                      state: {starships: ship}
                    }}
                    key={id}
                  >
                    <button className="App-Button">{ship.name}</button>
                  </Link>
                )}
              </div>
            } />
            <Route path="/starships/:id" render ={(props) => 
              <StarshipDetail {...props}/>
            } />
          </Switch>
        </div>
    );
  }
}

export default App;
