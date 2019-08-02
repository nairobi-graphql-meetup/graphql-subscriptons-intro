import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const ADD_EMPLOYEE = gql`
  mutation AddTodo($name: String!, $employerId: Int!) {
    addEmployee(name: $name, employerId: $employerId) {
      name
      id
    }
  }
`;

export default () => {
  const [name, setName] = useState(null);

  const [employerId, setEmployer] = useState(null);
  return (
    <Mutation mutation={ADD_EMPLOYEE}>
      {(ADD_EMPLOYEE, { data, error, loading }) =>
        <form
          onSubmit={e => {
            e.preventDefault();
            ADD_EMPLOYEE({ variables: { name, employerId } });
          }}
        >
          {error && <p style={{ color: 'red' }}>{`something went wrong, ${error.message}`}</p>}
          <div>
            <label htmlFor="employer">Employer</label>
            <select required onChange={e => setEmployer(parseInt(e.target.value))}>
              <option>Select employer</option>
              <option value={1}>Employer one</option>
            </select>
          </div>
          <div>
            <label htmlFor="employee_name">Employee Name</label>
            <input id="employer_name" placeholder="employee name" onChange={e => setName(e.target.value)} />
          </div>
          <div>
            {loading && <p>submiting ...</p>}
            <button type="submit">Add employee</button>
          </div>
        </form>}
    </Mutation>
  );
};
