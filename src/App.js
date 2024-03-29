import React, { Component } from 'react';
import GoogleMap from 'google-maps-react-markers'
import './App.css';
import Flat from './components/flat';
import Marker from './components/marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      allFlats: [],
      selectedFlat: null,
      search: ""
    };
  }


  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data,
          allFlats: data
        });
      });
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name)) 
    });
  }
  
  render() {
    
    let center = {
      lat: 48.8566,
      lng: 2.3522
    }

    if (this.state.selectedFlat) {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      }
    }
  
    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input 
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={this.handleSearch}/>
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat 
              key={flat.id} 
              flat={flat} 
              selectFlat={this.selectFlat}/>
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMap
            key={this.state.selectedFlat ? this.state.selectedFlat.id : 'default'}
            apiKey=""
            defaultCenter={center}
            defaultZoom={13}
          >
            {this.state.flats.map((flat) => {
              return <Marker 
                key={flat.id}
                lat={flat.lat} 
                lng={flat.lng} 
                text={flat.price + " " + flat.priceCurrency} 
                selected={flat === this.state.selectedFlat}
              />
            })}        
          </GoogleMap>
        </div>
      </div>
    );
  }
}
export default App; 
