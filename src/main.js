/* eslint-disable quotes */
const express = require('express');

const app = express();
const { randomUUID } = require('node:crypto'); // Diese Linie wurde mir von Matian gegeben

const port = 3000;
const loginCode = require("./login");

// Ich habe die gestrigen Aufgaben als Referenz genutzt

app.use(express.json());

app.use(loginCode);

// Dierser Array wurde mit ChatGPT erstellt
const tasks = [
  {
    taskID: "1", title: "Wake up", time: "07:00", author: "John Doe", createdDate: "2023-01-01", completedDate: "2023-02-07",
  },
  {
    taskID: "2", title: "Hygiene", time: "07:30", author: "Jane Smith", createdDate: "2023-01-02", completedDate: "2023-04-08",
  },
  {
    taskID: "3", title: "Breakfast", time: "08:00", author: "Alice Johnson", createdDate: "2023-01-03", completedDate: "2023-11-01",
  },
  {
    taskID: "4", title: "Work", time: "09:00", author: "Bob Williams", createdDate: "2023-01-04", completedDate: "2023-11-21",
  },
  {
    taskID: "5", title: "Commute", time: "17:00", author: "Charlie Brown", createdDate: "2023-01-05", completedDate: "2023-02-11",
  },
  {
    taskID: "6", title: "Lunch", time: "12:30", author: "Eva Davis", createdDate: "2023-01-06", completedDate: "2023-03-12",
  },
  {
    taskID: "7", title: "Chores", time: "16:00", author: "Frank White", createdDate: "2023-01-07", completedDate: "2023-11-12",
  },
  {
    taskID: "8", title: "Exercise", time: "18:00", author: "Grace Miller", createdDate: "2023-01-08", completedDate: "2023-05-11",
  },
  {
    taskID: "9", title: "Relaxation", time: "20:00", author: "Harry Wilson", createdDate: "2023-01-09", completedDate: "2023-03-11",
  },
  {
    taskID: "10", title: "Sleep", time: "22:00", author: "Ivy Lee", createdDate: "2023-01-10", completedDate: "2023-02-01",
  },
];

app.get('/tasks', loginCode, (request, response) => {
  if (request.session.email) {
    response.status(200).send(JSON.stringify(tasks));
  } else { return response.status(401).json({ error: "Not logged in" }); }
});

app.post('/tasks', loginCode, (request, response) => {
  if (request.session.email) {
    const newTask = request.body;
    newTask.taskID = randomUUID(); // Diese Linie wurde mir von Matian gegeben
    tasks.push(newTask);
    response.status(201).send(newTask);
  } else { return response.status(401).json({ error: "Not logged in" }); }
});

app.get('/tasks/:taskID', loginCode, (request, response) => {
  if (request.session.email) {
    const task = tasks.find((task) => task.taskID === request.params.taskID);

    if (task) {
      response.status(200).json(task);
    } else {
      response.status(404).json({ error: 'Task not found' });
    }
  } else { return response.status(401).json({ error: "Not logged in" }); }
});

app.patch("/tasks/:taskID", loginCode, (request, response) => {
  if (request.session.email) {
    const keys = Object.keys(request.body);
    const taskToUpdate = tasks.find((task) => task.taskID === request.params.taskID);

    if (taskToUpdate) {
      keys.forEach((key) => (taskToUpdate[key] = request.body[key]));
      response.status(200).json(taskToUpdate);
    } else {
      response.status(404).json({ error: "Task not found" });
    }
  } else { return response.status(401).json({ error: "Not logged in" }); }
});

app.delete('/tasks/:taskID', loginCode, (request, response) => {
  if (request.session.email) {
    const { taskID } = request.params;
    const existingTaskIndex = tasks.findIndex((task) => task.taskID === taskID);

    if (existingTaskIndex !== -1) {
      const deletedTask = tasks.splice(existingTaskIndex, 1)[0];
      response.status(200).json(deletedTask);
    } else {
      response.status(404).json({ error: "Task not found" });
    }
  } else { return response.status(401).json({ error: "Not logged in" }); }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
