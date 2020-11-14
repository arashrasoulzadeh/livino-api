const request = require("supertest");
const app = require("../app");

// todo : 
// describe("Test the root path", () => {
//     test("It should response the GET method", done => {
//         request(app)
//             .post("/api/auth/register")
//             .then(response => {
//                 expect(response.statusCode).toBe(200);
//                 done();
//             });
//     });
// });