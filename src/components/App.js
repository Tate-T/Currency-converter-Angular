import './App.css';
import Header from './Header/Header.jsx';
import Converter from './Converter/Converter.jsx';
import getCurrencyRateApi from './services/converterApi';
import { useState, ngOnInit } from 'react';

function App() {
  const [rates, setRates] = useState([]);

  ngOnInit(() => {
    getCurrencyRateApi().then(response => {
      setRates(response.rates)
    })
  }, [])

  return (
    <div className="App">
      <Header rates={rates} />
      <Converter />
    </div>
  );
}

export default App;
