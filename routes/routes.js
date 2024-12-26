const express = require('express');
const Task = require('../models/Task');


const routes = express.Router();

let idcounteur = 0;


routes.post('/post' ,async (req , res) => {
    const id = idcounteur++;
    const title = req.body.title;
    const description = req.body.description;


    try {
        const task = new Task({ _id , title , description});
        await task.save();

        res.status(201).json(task);
    }catch(error ){

        res.status(500).json({message: 'Error creating task', error: error.message})
    }


});

routes.get('/getall', async( req , res ) => {
    try {
        const task = await Task.find();
        res.json(task);
    }catch(error){
        res.status(500).json({message :'Erreur lors de la récupération des tâches' , error: error.message});
    }
})
