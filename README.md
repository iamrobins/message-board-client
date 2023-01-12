### Setup
I'm keeping the .env file for your ease of test

1. Install Nodejs https://nodejs.org/en/download/
2. Run yarn install or npm install
3. Go to localhost:3000
4. Incase you're unable to get the access token try this example one with a validity od 30 days.
```txt
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6ImFkbWluIiwiZXhwIjoxNjc2MTIyNjkzLCJpYXQiOjE2NzM1MzA2OTN9.fvnTSkNrNxLhNtHUl43Q-5DrwSNPyarSyne23O9dJMI
```
5. Make sure you don't update Django's backend secret key because it was being used to generate above token.
6. Manual way of getting accesstoken is to send a GET request to this endpoint with any HTTP client.
```txt
http://localhost:8000/api/v1/admin-access
```