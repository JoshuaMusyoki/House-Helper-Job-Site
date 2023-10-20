import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRouter from './router/AppRouter';
import UserRegister from './pages/SignUp/UserRegister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
      {/* <AppRouter /> */}
    </Provider>
  
  </React.StrictMode>
);

