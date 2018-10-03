'use strict';
// acá vamos a guardar nuestras personas y tareas
var tasks = {};
var reset = function () { tasks = {}; }
// var arr = []


// devuelve un arreglo de personas con tareas
var listPeople = function () { 
  if (Object.keys(tasks).length === 0) return []
  return Object.keys(tasks)
}

// guarda una tarea para una persona en particular
var add = function (name, task) {
  if (!task.complete) task.complete = false

  if (tasks[name]) {
    tasks[name].push(task)
    return
  }

  tasks[name] = [task]
}

var complete = function (name, i) {
  tasks[name][i].complete = true
}

var list = function (value) { // devuelve arreglo
  return tasks[value]
}

var remove = function (name, i) {
  tasks[name].splice(i,1)
}

module.exports = { reset, listPeople, add, tasks, list, remove, complete };






