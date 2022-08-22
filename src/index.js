import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';


const logger=({dispatch,state})=>(next)=>(action)=>{
  if(typeof action!=='function'){
    console.log('action',action.type); 
  }
  next(action);
  
}
const store=createStore(rootReducer,applyMiddleware(logger,thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <App store={store} />
    
  </React.StrictMode>
);


reportWebVitals();
