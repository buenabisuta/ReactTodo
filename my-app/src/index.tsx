import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { KeyValue } from './component/KeyValue';
import { ParentComponent } from './component/ParentComponent';
import { UseEffectSample } from './component/UseEffectSample';
import { Provider } from 'react-redux';
import store from './Store';
import { Home2 } from './component/Home2';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/" element={<Home foo={'test'} />} />
        <Route path="/Home2" element={<Home2 foo={'test'} />} />
        <Route path="/Key" element={<KeyValue />} />
        <Route path="/child" element={<ParentComponent />} />
        <Route path="/effect" element={<UseEffectSample />} />    
    </Routes>
  </Router>

  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
