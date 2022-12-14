import React from 'react';
import ReactDOM from 'react-dom/client';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import { store } from './app/stores/store';
import { Provider } from 'react-redux';
import App from './App';

if(process.env.NODE_ENV === 'production') disableReactDevTools();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <Router>
    <Provider  store={store} >
      <Routes>
        <Route path="/*" element={ <App />} />
      </Routes>
    </Provider>
    </Router>
  </React.StrictMode>
);

