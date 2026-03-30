// TODO 1: Import Express
import express from 'express';


// TODO 2: Create the Express app and store it in a variable named app
const app = express();
const PORT = 3000;

// TODO 3: Allow React to access the server
import cors from 'cors';
app.use(cors());

// TODO 5: Create the home route "/"
app.get('/', (req, res) => {
  res.send('Hello, Express with ES6 import!');
});


// TODO 6: Create the "/about" route
app.get('/about', (req, res) => {
  res.send('Hello, Express with ES6 import!');
});


// TODO 7: Create the "/student" route
app.get('/student', (req, res) => {
  res.json({
       name: 'Aisha',
       major: 'Computer Science',
     });
});

// TODO 4: Start the server on port 3000
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});