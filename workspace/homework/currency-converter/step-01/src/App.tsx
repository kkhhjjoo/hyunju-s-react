import { useState } from 'react';
import './App.css';

type Currency = 'KRW' | 'USD' | 'EUR' | 'JPY';

type ExchangeRates = {
  [key in Currency]: {
    [key in Currency]: number;
  };
};

const App = () => {
  const [amount, setAmount] = useState<string>('');
  const [fromCurrency, setFromCurrency] = useState<Currency>('KRW');
  const [toCurrency, setToCurrency] = useState<Currency>('USD');
  const [result, setResult] = useState<string>('');
   const exchangeRates: ExchangeRates = {
    KRW: { USD: 0.00075, EUR: 0.00069, JPY: 0.11, KRW: 1 },
    USD: { KRW: 1330, EUR: 0.92, JPY: 149, USD: 1 },
    EUR: { KRW: 1450, USD: 1.09, JPY: 162, EUR: 1 },
    JPY: { KRW: 8.95, USD: 0.0067, EUR: 0.0062, JPY: 1 }
   };
  
  const handleConvert = (): void => {
    if (!amount || isNaN(Number(amount))) {
      setResult('올바른 금액을 입력하세요');
      return;
    };

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (parseFloat(amount) * rate).toFixed(2);
    setResult(`${convertedAmount} ${toCurrency}`);
  };

  const handleSwap = (): void => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult('');
  }
  return (
     <div className="card">
      <h2>환율 계산기</h2>

      <label htmlFor="amount">금액</label>
      <input id="amount" type="number" step="1" value={amount} onChange={(e) => setAmount(e.target.value)} />

      <div className="row">
        <div>
          <label htmlFor="from">From</label>
          <select id="from" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value as Currency)}>
            <option value="KRW">KRW</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
        <div>
          <label htmlFor="to">To</label>
          <select id="to" value={toCurrency} onChange={(e) => setFromCurrency(e.target.value as Currency)}>
            <option value="USD">USD</option>
            <option value="KRW">KRW</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
          </select>
        </div>
      </div>

      <div className="row" style={{marginTop:'12px'}}>
        <button id="convert" onClick={handleConvert}>변환</button>
        <button id="swap" type="button" onClick={handleSwap}>↺ 교차</button>
      </div>

      <div className="result" id="result">결과: {result || '???'}</div>
  </div>
  )
}

export default App;
