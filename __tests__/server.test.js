'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe('Testing routes', () => {
    it('should create a record using POST', async () => {
        const response = await request.post('/vacation').send({
            location: "testCity",
            country: "testCountry",
            description: "Test review description",
            duration: 4,
            rating: 3,
            expences: 12,
            username: "John Doe",
            imageUrl: "TestURL.comnet"
        });
        expect(response.status).toEqual(201);
        expect(response.body.username).toEqual('John Doe');
    });
});
