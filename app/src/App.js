import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './client';
import Employees from './Employees';
import Employers from './Employers';
import AddEmployeeForm from './AddEmployeeForm';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <div className="col">
          <Employees />
          <Employers />
        </div>
        <div className="col">
          <AddEmployeeForm />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
