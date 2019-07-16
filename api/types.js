const typeDefs = `
  type Query{
    employees: [Employee]
    employers: [Employer]
  }

  type Employee {
    id: Int!
    name: String!
    employerId: Int!
    employer: Employer
  }

  type Employer {
    id: Int!
    name: String!
    employees: [Employee]
  }

  type Mutation {
    addEmployee(name: String!, employerId: Int!): Employee
  }

  type Subscription {
    newEmployeeAdded: Employee
  }
`;

module.exports = typeDefs;
