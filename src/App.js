import React from 'react';
import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';

function App() {
  const flat1 = {
    "id": 148,
    "name": "Trendy Apt in Buttes Montmartre",
    "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
    "price": 200,
    "priceCurrency": "EUR",
    "lat": 48.885707,
    "lng": 2.343543
  };
  const flat2 ={
    "id": 145,
    "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
    "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
    "price": 164,
    "priceCurrency": "EUR",
    "lat": 48.884211,
    "lng": 2.346890
  };
  const flat3 ={
    "id": 201,
    "name": "Super 60m2 in trendy neighborhood!",
    "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg",
    "price": 150,
    "priceCurrency": "EUR",
    "lat": 48.885312,
    "lng": 2.341225
  };

  const flats = [flat1, flat2, flat3];


  return (
    <div className="app">
      <div className="main">
        <div className="search">
        </div>
        <div className="flats">
          {flats.map((flat) => {
            return <Flat flat={flat} />
          })}
        </div>
      </div>
      <div className="map">
      </div>
    </div>
  );
}

export default App;
