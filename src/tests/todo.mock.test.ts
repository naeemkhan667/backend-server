// test/users.test.js
import request from 'supertest';
import app from '../app.js'; // Import your Express app
import Todo from '../models/todo.model'; // Import the User model to mock it

// --- Mock the Mongoose User model ---
// We are mocking the entire module where the User model is defined.
// This allows us to control the behavior of methods like .find() and instance.save().
jest.mock('../models/todo.model'); // The path to the module being mocked

// Cast the mocked User to Jest's MockedFunction for better typing and access to mock properties
// const MockedUser = User;
const MockedTodo = jest.mocked(Todo);

describe('User API Endpoints (Database Mocking)', () => {
  // Reset mocks before each test to ensure test isolation
  beforeEach(() => {
    // Clears any previous mock return values or spy information
    MockedTodo.mockClear();
    MockedTodo.find.mockClear();
    // Add clear for other mocked methods if used (e.g., findById, deleteMany)
  });

  // Test GET /users with mocking
  it('should return an empty array if no todos exist (mocked)', async () => {
    // Configure the mock User.find() to return an empty array
    //MockedTodo.find.mockResolvedValue([]); // Simulate finding no users

    MockedTodo.find.mockImplementation(() => {
      const mockQueryChain = {
        sort: jest.fn().mockResolvedValue([]) // Configure the mock sort() function to return the final result
      };
      // --- FIX: Add type assertion here ---
      return mockQueryChain as any; // Tell TypeScript to treat this object as compatible
    });

    const res = await request(app).get('/api/todos');

    //expect(res.body.status).toEqual('success');
    expect(res.body.status).toEqual('success');
    // Verify that User.find() was called by the route handler
    expect(MockedTodo.find).toHaveBeenCalledTimes(1);
    expect(MockedTodo.find).toHaveBeenCalledWith(); // Check arguments if necessary
  });

  // it('should return a list of todos (mocked)', async () => {
  //   const mockUsers = [
  //     { _id:1, title: 'Title1', description: 'description1', completed: false },
  //     { _id:2,title: 'Title2', description: 'description2', completed: true },  
  //   ];

  //   // Configure the mock User.find() to return the mock user list
  //   MockedUser.find.mockResolvedValue(mockUsers);

  //   const res = await request(app).get('/api/todos');

  //   expect(res.statusCode).toEqual(200);
  //   expect(res.body).toEqual(mockUsers);
  //   expect(MockedUser.find).toHaveBeenCalledTimes(1);
  // });

  // // Test POST /users with mocking
  // it('should create a new user (mocked)', async () => {
  //   const newUserPayload = { name: 'Charlie', email: 'charlie@example.com' };
  //   const savedUser = { _id: '3', ...newUserPayload }; // Simulate the saved user with an ID

  //   // Mock the User constructor to return a mock instance
  //   // This mock instance should have a .save() method that we can also mock
  //   MockedUser.mockImplementation(() => {
  //     return {
  //       ...newUserPayload, // The data the instance is created with
  //       save: jest.fn().mockResolvedValue(savedUser), // Mock the save method
  //     };
  //   });

  //   const res = await request(app)
  //     .post('/users')
  //     .send(newUserPayload);

  //   expect(res.statusCode).toEqual(201);
  //   expect(res.body).toEqual(savedUser);

  //   // Verify the User constructor was called with the correct payload
  //   expect(MockedUser).toHaveBeenCalledTimes(1);
  //   expect(MockedUser).toHaveBeenCalledWith(newUserPayload);

  //   // Verify the save method on the created instance was called
  //   const mockUserInstance = MockedUser.mock.results[0].value; // Get the mock instance
  //   expect(mockUserInstance.save).toHaveBeenCalledTimes(1);
  // });

  // it('should return 400 if email is not unique on creation (mocked)', async () => {
  //    const newUserPayload = { name: 'Faythe', email: 'eve@example.com' };

  //    // Mock the User constructor and its save method to simulate a duplicate key error
  //     MockedUser.mockImplementation(() => {
  //       return {
  //           ...newUserPayload,
  //           save: jest.fn().mockRejectedValue({ code: 11000, message: 'Duplicate key error' }), // Simulate the Mongoose duplicate error structure
  //       };
  //     });


  //   const res = await request(app)
  //     .post('/users')
  //     .send(newUserPayload);

  //   expect(res.statusCode).toEqual(400);
  //   expect(res.text).toBe('Email already exists'); // Check the error message from the route handler
  // });

  // Add tests for other endpoints (GET by ID, PUT, DELETE) similarly,
  // mocking the relevant Mongoose methods (e.g., findById, findByIdAndUpdate, findByIdAndDelete)
});