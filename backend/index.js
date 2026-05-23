require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const UserRouter = require('./routers/UserRouter');
const ProjectRouter = require('./routers/ProjectRouter');


app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://u-inspire-rust.vercel.app' 
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const port = process.env.PORT || 5000;  

// middleware
app.use(express.json());
app.use('/user', UserRouter);
app.use('/project', ProjectRouter);

// endpoints
app.get('/', (req, res) => res.send('response from express'));
app.get('/add', (req, res) => res.send('response from add'));
app.get('/all', (req, res) => res.send('response from all'));
app.get('/delete', (req, res) => res.send('response from delete'));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});