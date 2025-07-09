// cypress/support/utils/data.ts
// import { faker } from '@faker-js/faker';

// export const dynamicUser = {
//   email: faker.internet.email(),
//   password: faker.internet.password(),
// };

export const users = {
  admin: {
    email: 'afreecarl@gmail.com',
    password: '#carl234'
  },
  user: {
    email: 'user@example.com',
    password: 'User1234'
  },
  invalid: {
    email: 'invalid@example.com',
    password: 'wrongpass'
  }
};

export const urls = {
  login: '/login',
  dashboard: '/dashboard',
};