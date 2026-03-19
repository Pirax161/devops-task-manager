const express = require('express');
const app = express();
app.use(express.json());

const tasksRouter = require('./routes/tasks'); 

// Routes
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => { 
    res.json({ message: "Task Manager API running (Lab 4 v2)" }); 
});

// GESTION DU PORT (Crucial pour Docker)
const PORT = process.env.PORT || 3000;

// On ne lance le serveur QUE si ce fichier est exécuté directement
// Cela évite les conflits avec les tests et les doublons
if (require.main === module) { 
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`API running on port ${PORT}`);
    });
} 

module.exports = app;