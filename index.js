const express = require('express'); 
const mongoose = require('mongoose');
const taskRoutes = require('./routes/routes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017').then(() => {
  console.log('connected  to mongodb ');
})
.catch(err => {
  console.log('error concting to MongoDB');
  
});


 app.use('/api', taskRoutes);

const port = 3000;

app.listen(port , () => {
  console.log(`server running in port ,${port}`);
});

