// Load the axios library
import dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';
import { expect } from 'chai';

// API URL and headers
const API_URL = 'https://gorest.co.in/public/v2/users'; 
const headers = {
 Authorization: `Bearer ${process.env.GOREST_TOKEN}`,
  'Content-Type': 'application/json',
};

// Test Suite
describe("API Automation - GoRest", () => {

  // Variable to store the userId
  let userId;

  // List User
  it("List user details (Positive Test)", async () => {
    const response = await axios.get(API_URL, { headers });
    console.log("List User", response.data);
    expect(response.status).to.equal(200);
  });

  // Create User
  it("Create a new user (Positive Test)", async () => {
    const userData = {
      name: "Irfan",
      gender: "male",
      email: `maulana@gmail.com`,
      status: "active",
    };

    const response = await axios.post(API_URL, userData, { headers });
    console.log("Create User", response.data);
    expect(response.status).to.equal(201);
    expect(response.data).to.have.property("id");
    userId = response.data.id;
  });

  // Get User
  it("Get user details (Positive Test)", async () => {
    const response = await axios.get(`${API_URL}/${userId}`, { headers });
    console.log("Get User", response.data);
    expect(response.status).to.equal(200);
    expect(response.data.id).to.equal(userId);
  });

  // Update User
  it("Update user details (Positive Test)", async () => {
    const updateData = { name: "Maulana", status: "inactive" };
    const response = await axios.put(`${API_URL}/${userId}`, updateData, { headers });
    console.log("Update User", response.data);
    expect(response.status).to.equal(200);
  });

  // Delete User
  it("Delete user (Positive Test)", async () => {
    const response = await axios.delete(`${API_URL}/${userId}`, { headers });
    console.log("Delete User", response.data);
    expect(response.status).to.equal(204);
  });

  // Negative Test - Get Non-Existing User
  it("Get non-existing user (Negative Test)", async () => {
    try {
      await axios.get(`${API_URL}/9999999`, { headers });
    } catch (error) {
      expect(error.response.status).to.equal(404);
      console.log("Get Non-Existing User Error:", error.response.data);
    }
  });
});