import React from 'react';
import ReactDOM from 'react-dom/client';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {persistStore} from 'redux-persist';
import Preloader from './features/dashboard/components/Preloader';
import { store } from './app/stores/store';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

if(process.env.NODE_ENV === 'production') disableReactDevTools();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let persistor = persistStore(store)
root.render(
  <React.StrictMode>
    <Provider  store={store} >
      <PersistGate loading={<Preloader/>} persistor={persistor}>
      <HelmetProvider>  
        <Router>
          <Routes>
            <Route path="/*" element={ <App />} />
          </Routes>
    </Router>
    </HelmetProvider>
    </PersistGate>
</Provider>
  </React.StrictMode>
);

