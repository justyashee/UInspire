const express = require('express');
const app = express();
const UserRouter = require('./routers/UserRouter');
const ProjectRouter = require('./routers/ProjectRouter')

const port = 5000;
//middleware
app.use(express.json());
app.use('/user', UserRouter);
app.use('/project', ProjectRouter);

//endpoint
app.get('/', (req, res) => {
  res.send('response from express');
});

app.get('/add', (req, res) => {
  res.send('response from add');
});

app.get('/all', (req, res) => {
  res.send('response from all');
});

app.get('/delete', (req, res) => {
  res.send('response from delete');
});

//starting the server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});