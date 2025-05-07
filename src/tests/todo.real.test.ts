// test/users.test.js
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../app'; // Import your Express app
import Todo from '../models/todo.model'; // Import your User model

// Replace with your dedicated test database URI
const TEST_DATABASE_URI = 'mongodb://localhost:27017/todos';

describe('TodoModel API Endpoints (Real Database)', () => {
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
    await Todo.deleteMany({});
  });

  //Test GET /todo
  it('should return an empty array if no todo list exist', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.body.status).toEqual('success');
    expect(res.body.message).toEqual('Todos fetched successfully');
    expect(res.body.data).toEqual([]);
  });

  it('should return a list of todos', async () => {
    // Seed the database with some users
    await Todo.create([
      { title: 'Title1', description: 'description1', completed: false },
      { title: 'Title2', description: 'description2', completed: true },
    ]);

    const res = await request(app).get('/api/todos');
    expect(res.body.status).toEqual('success');
    expect(res.body.data.length).toBe(2);
    expect(res.body.data[0]).toHaveProperty('title', 'Title1');
    expect(res.body.data[1]).toHaveProperty('description', 'description2');
  });

  //Test POST /users
  it('should create a new todo', async () => {
    const newTodo = { title: 'Title1', description: 'description1',  completed: true };
    const res = await request(app)
      .post('/api/todos')
      .send(newTodo);

    expect(res.body.status).toEqual('success');
    expect(res.body.data[0]).toHaveProperty('_id');
    expect(res.body.data[0]).toHaveProperty('title', 'Title1');
    expect(res.body.data[0]).toHaveProperty('description', 'description1');

    // Verify the user was actually saved in the database
    const db = await Todo.findById(res.body.data[0]._id);
    expect(db).not.toBeNull();
    expect(db?.description).toBe('description1');
  });

  it('should return 400 if description is missing on creation', async () => {
    const newTodo = { title: 'Title' }; // Missing email
    const res = await request(app)
      .post('/api/todos')
      .send(newTodo);

    expect(res.statusCode).toEqual(400);
    // You might also check the error message content if your API provides one
  });

    // it('should return 400 if email is not unique on creation', async () => {
    //     const existingUser = { name: 'Eve', email: 'eve@example.com' };
    //     await User.create(existingUser); // Add a user to the database

    //     const newUserWithSameEmail = { name: 'Faythe', email: 'eve@example.com' };
    //     const res = await request(app)
    //     .post('/users')
    //     .send(newUserWithSameEmail);

    //     expect(res.statusCode).toEqual(400);
    //     // You might check the error message content
    // });

  // Add tests for other endpoints (GET by ID, PUT, DELETE) similarly
});