const request = require('supertest');
const app = require('./server'); // Assuming you export Express app in server.js

describe('GET /api/video', () => {
    it('should return video metadata', async () => {
        const response = await request(app).get('/api/video');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('title', 'Soccer Highlights');
        expect(response.body).toHaveProperty('duration', '90 minutes');
    });
});
