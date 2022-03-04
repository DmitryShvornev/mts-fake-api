import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootStore from './stores/root-store/root-store';
import {StoresContext} from './stores/root-store/root-store';

const globalStore = new RootStore();


ReactDOM.render(
  <React.StrictMode>
    <StoresContext.Provider value={globalStore}>
      <App />
    </StoresContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
