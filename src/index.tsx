// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux 
import { store } from "./store/store"
import { Provider } from "react-redux"

// Components
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
