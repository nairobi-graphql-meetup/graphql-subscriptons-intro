import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_EMPLOYERS = gql`
  query {
    employers {
      name
      id
    }
  }
`;

export default () => {
  return (
    <Query query={GET_EMPLOYERS}>
      {({ loading, error, data }) => {
        if (error) return <p>Something went wrong</p>;
        if (loading) return <p>Loading employers ...</p>;
        return (
          <pre>
            {JSON.stringify(data, null, 2)}
          </pre>
        );
      }}
    </Query>
  );
};
