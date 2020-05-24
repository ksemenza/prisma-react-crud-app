import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {BrowserRouter as Router} from 'react-router-dom'

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/k-semenza-a8c44e/demo-server/dev'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
    <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);



