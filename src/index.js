import { ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'reactstrap';
import App from './App';
import { AuthProvider } from './providers/AuthProvider';
import client from './utils/apolloClient';


ReactDOM.render(

  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <ToastContainer />
        <App />
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)