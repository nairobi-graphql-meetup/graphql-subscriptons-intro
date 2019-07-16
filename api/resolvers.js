const { PubSub } = require('apollo-server');
let { employees, employers } = require('./data');
const pubsub = new PubSub();

const NEW_EMPLOYEE_ADDED = 'NEW_EMPLOYEE_ADDED';

const resolvers = {
  Query: {
    employees: () => employees,
    employers: () => employers
  },
  Employee: {
    employer: parent => employers.find(e => e.id === parent.employerId)
  },
  Employer: {
    employees: parent => employees.filter(e => e.employerId === parent.id)
  },
  Mutation: {
    addEmployee: (_, args) => {
      const { name, employerId } = args;
      const newEmployee = {
        name,
        employerId,
        id: employees.length + 1
      };
      pubsub.publish(NEW_EMPLOYEE_ADDED, { newEmployee });
      employees = [...employees, newEmployee];
      return newEmployee;
    }
  },
  Subscription: {
    newEmployeeAdded: {
      subscribe: () => pubsub.asyncIterator([NEW_EMPLOYEE_ADDED]),
      resolve: payload => payload.newEmployee
    }
  }
};

module.exports = resolvers;
