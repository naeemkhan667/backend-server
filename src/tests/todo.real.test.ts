// test/users.test.js
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../app'; // Import your Express app
import User from '../models/todo.model'; // Import your User model

// Replace with your dedicated test database URI
const TEST_DATABASE_URI = 'mongodb://localhost:27017/todos';

describe('User API Endpoints (Real Database)', () => {
  // Connect to the database before running any tests
  beforeAll(async () => {
    await mongoose.connect(TEST_DATABASE_URI, {});
  });

  // Clean up the database after all tests are done
  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  // Clean up the Users collection before each test
  beforeEach(async () => {
    await User.deleteMany({});
  });

  // Test GET /users
  it('should return an empty array if no users exist', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.body.status).toEqual('success');
    expect(res.body.message).toEqual('Todos fetched successfully');
    expect(res.body.data).toEqual([]);
  });

//   it('should return a list of users', async () => {
//     // Seed the database with some users
//     await User.create([
//       { name: 'Alice', email: 'alice@example.com' },
//       { name: 'Bob', email: 'bob@example.com' },
//     ]);

//     const res = await request(app).get('/users');
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.length).toBe(2);
//     expect(res.body[0]).toHaveProperty('name', 'Alice');
//     expect(res.body[1]).toHaveProperty('email', 'bob@example.com');
//   });

//   // Test POST /users
//   it('should create a new user', async () => {
//     const newUser = { name: 'Charlie', email: 'charlie@example.com' };
//     const res = await request(app)
//       .post('/users')
//       .send(newUser);

//     expect(res.statusCode).toEqual(201);
//     expect(res.body).toHaveProperty('_id');
//     expect(res.body).toHaveProperty('name', 'Charlie');
//     expect(res.body).toHaveProperty('email', 'charlie@example.com');

//     // Verify the user was actually saved in the database
//     const userInDb = await User.findById(res.body._id);
//     expect(userInDb).not.toBeNull();
//     expect(userInDb.email).toBe('charlie@example.com');
//   });

//   it('should return 400 if email is missing on creation', async () => {
//     const newUser = { name: 'David' }; // Missing email
//     const res = await request(app)
//       .post('/users')
//       .send(newUser);

//     expect(res.statusCode).toEqual(400);
//     // You might also check the error message content if your API provides one
//   });

//     it('should return 400 if email is not unique on creation', async () => {
//         const existingUser = { name: 'Eve', email: 'eve@example.com' };
//         await User.create(existingUser); // Add a user to the database

//         const newUserWithSameEmail = { name: 'Faythe', email: 'eve@example.com' };
//         const res = await request(app)
//         .post('/users')
//         .send(newUserWithSameEmail);

//         expect(res.statusCode).toEqual(400);
//         // You might check the error message content
//     });

  // Add tests for other endpoints (GET by ID, PUT, DELETE) similarly
});