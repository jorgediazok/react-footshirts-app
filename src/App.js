import React, { useEffect } from 'react';
import './App.css';
import Client from './api';

const getData = async () => {
  try {
    let response = await Client.getEntries({
      content_type: 'footballShirts',
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

function App() {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Footbal App</h1>
      <div>{}</div>
    </div>
  );
}

export default App;
