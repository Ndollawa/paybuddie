import React from 'react';
import ReactDOM from 'react-dom/client';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {persistStore} from 'redux-persist';
import Preloader from './features/dashboard/components/Preloader';
import { store } from './app/stores/store';
import { Provider } from 'react-redux';
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
if(process.env.NODE_ENV === 'production') disableReactDevTools();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
function Fallback({ error, resetErrorBoundary }:FallbackProps) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
   <div className="container row justify-content-center h-100 align-items-center" style={{width:'100%',height:'100vh'}}>
       <div className="row justify-content-center h-100 align-items-center">
           <div className="col-md-7">
               <div className="form-input-content text-center error-page">
                   <h1 className="error-text font-weight-bold">400</h1>
                   <h4><i className="fa fa-thumbs-down text-danger"></i> Oops!!!</h4>
                   <h5>Something went wrong. Your Request resulted in an error</h5>
                   <p>Reload the page to continue. If this still continues, please contact out support team</p>
       <div>
                       <button className="btn btn-secondary" onClick={()=>resetErrorBoundary()} >Click to go Back</button>
                   </div>
               </div>
           </div>
       </div>
   </div>
  );
}
let persistor = persistStore(store)
root.render(
  <React.StrictMode>
      <ErrorBoundary FallbackComponent={Fallback} onError={(error)=>console.log(error)}>
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
</ErrorBoundary>
  </React.StrictMode>
);

