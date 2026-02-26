const express = require('express');
const app = express();
app.use(express.json());

if (require.main === module) { 
 app.listen(3000, () => console.log("API running on port 3000")); 
} 
module.exports = app;

const tasksRouter = require('./routes/tasks'); 

// CI test change 
console.log("Testing CI with a Pull Request");

app.get('/', (req, res) => { 
 res.json({ message: "Task Manager API running (Lab3" }); 
});

app.use('/tasks', tasksRouter);

app.listen(3000, ()=> console.log("API running on port 3000"));
