const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


// Let tasks array mostly generated with ChatGPT
let tasks = [
    { taskID: "1", title: "Wake up", time: "07:00", author: "John Doe", createdDate: "2023-01-01", completedDate: null },
    { taskID: "2", title: "Hygiene", time: "07:30", author: "Jane Smith", createdDate: "2023-01-02", completedDate: null },
    { taskID: "3", title: "Breakfast", time: "08:00", author: "Alice Johnson", createdDate: "2023-01-03", completedDate: null },
    { taskID: "4", title: "Work", time: "09:00", author: "Bob Williams", createdDate: "2023-01-04", completedDate: null },
    { taskID: "5", title: "Commute", time: "17:00", author: "Charlie Brown", createdDate: "2023-01-05", completedDate: null },
    { taskID: "6", title: "Lunch", time: "12:30", author: "Eva Davis", createdDate: "2023-01-06", completedDate: null },
    { taskID: "7", title: "Chores", time: "16:00", author: "Frank White", createdDate: "2023-01-07", completedDate: null },
    { taskID: "8", title: "Exercise", time: "18:00", author: "Grace Miller", createdDate: "2023-01-08", completedDate: null },
    { taskID: "9", title: "Relaxation", time: "20:00", author: "Harry Wilson", createdDate: "2023-01-09", completedDate: null },
    { taskID: "10", title: "Sleep", time: "22:00", author: "Ivy Lee", createdDate: "2023-01-10", completedDate: null }
];

app.get('/tasks', (request, response) => {
    response.status(200).send(JSON.stringify(tasks));
});

app.post('/tasks', (request, response) => {
    tasks.push(request.body);
    response.status(201).send(tasks);
});

app.get('/tasks/:taskID', (request, response) => {
    const task = tasks.find((task) => task.taskID === request.params.taskID);

    if (task) {
        response.status(200).json(task);
    } else {
        response.status(404).json({ error: 'Task not found' });
    }
});

app.patch("/tasks/:taskID", (request, response) => {
    const keys = Object.keys(request.body);
    const taskToUpdate = tasks.find((task) => task.taskID === request.params.taskID);

    if (taskToUpdate) {
        keys.forEach((key) => (taskToUpdate[key] = request.body[key]));
        response.status(200).json(taskToUpdate);
    } else {
        response.status(404).json({ error: "Task not found" });
    }
});

app.delete('/tasks/:taskID', (request, response) => {
    const taskID = request.params.taskID;
    const existingTaskIndex = tasks.findIndex((task) => task.taskID === taskID);

    if (existingTaskIndex !== -1) {
        const deletedTask = tasks.splice(existingTaskIndex, 1)[0];
        response.status(200).json(deletedTask);
    } else {
        response.status(404).json({ error: "Task not found" });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
