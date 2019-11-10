import React from 'react';
import './App.css';
import Car from './Car/Car'
function App() {
  const divStyle={
    textAlign:'center'
  };
  return (
    <div style={divStyle} >
      <h1>Privet</h1>
      <Car name={'ford'} year={2019}/>
      <Car name={'ford'} year={2019}/>

    </div>
  );
}

export default App;
