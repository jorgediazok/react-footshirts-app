import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from './components/Slider';
import Client from './api';

function App() {
  const [camisetas, setCamisetas] = useState([]);

  const getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'footballShirts',
      });
      const data = await response.items;
      setCamisetas(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Footbal App</h1>
      <Slider />
    </div>
  );
}

export default App;

/*
 <div>
        {camisetas.map((camiseta) => {
          return (
            <img
              src={camiseta.fields.image.fields.file.url}
              alt={camiseta.fields.title}
            />
          );
        })}
      </div>
*/
