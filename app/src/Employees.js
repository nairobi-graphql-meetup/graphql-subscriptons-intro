import React  from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import List from './List';

const GET_EMPLOYEES = gql`
  query {
    employees {
      name
      id
      employerId
    }
  }
`;

const NEW_EMPLOYEE_SUBSCRIPTION = gql`
  subscription{
    newEmployeeAdded{
      name
      id
      employerId
    }
  }
`;


export default () => {
  return (
    <>
      <Query query={GET_EMPLOYEES}>
        {({ loading, data, error, subscribeToMore }) => {
          if (error) {
            return <p>Something went wrong</p>;
          }
          if (loading) {
            return <p>loading employees...</p>;
          }
          return <List data={data} fn={() => subscribeToMore({
            document: NEW_EMPLOYEE_SUBSCRIPTION,
            updateQuery: (prev, { newdata }) => {
              console.log(newdata)
            }
          })}/>;
        }}
      </Query>
    </>
  );
};
