const express = require('express');

const app = express();

app.post('/register', async function(req, res) {});
app.post('/login', async function(req, res) {});
app.post('/todos', async function(req, res) {});
app.get('/todos', async function(req, res) {});
app.get('/todos/:id', async function(req, res) {});
app.put('/todos/:id', async function(req, res) {});
app.delete('/todos/:id', async function(req, res) {});
app.delete('/todos', async function(req, res) {});

app.listen(3000);
