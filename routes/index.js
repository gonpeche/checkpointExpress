'use strict';

var express = require('express');
var router = express.Router();
var todos = require('../models/todos');



// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan

router.get('/users/:name/tasks', function (req,res) {
    var name = req.params.name;
    var status = req.query.status;
    var tasks = todos.list(name);


    
    if (!todos.list(req.params.name)) {
        res.send(404)
    }
    // Object.
    
    if (status === 'complete') {
        let res1 = [];
        tasks.forEach(task => {
            if (task.complete === true) {
                res1.push(task)
            }
        })
        res.send(res1)
    } else if (status === 'active') {
        let res2 =[]
        tasks.forEach(task => {
            if (task.complete === false) {
                res2.push(task)
            }
        })
        res.send(res2)
    } else {
        res.send(todos.list(name))
    }

})

router.get('/users', function (req,res) {
    res.json(todos.listPeople())
})

router.post('/users/:name/tasks', function (req,res){
    // var name = req.params.name;
    // var status = req.query.status;
    var obj = Object.keys(req.body)
    var error = false

    for (var i = 0; i < obj.length; i++) {
        if (obj[i] !== 'content' && obj[i] !== 'complete') {
            error = true
        }
    }
    
    if (error) {
        return res.send(400)

    }

    if (todos.tasks) {
        todos.add(req.params.name, req.body)
        res.status(201).json(req.body)
    }


})

router.put('/users/:name/tasks/:id', function (req,res){
    var name = req.params.name;
    var id = req.params.id
    var tasks = todos.list(name);
    tasks[id].complete = true

    res.send(200)
})

router.delete('/users/:name/tasks/:id', function (req,res){
    var name = req.params.name;
    var id = req.params.id
    var tasks = todos.list(name);
    tasks.splice(id,1)

    res.send(204)
})



module.exports = router;