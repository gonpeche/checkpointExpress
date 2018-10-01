'use strict';

var tasks = {
    people: []
}; // acá vamos a guardar nuestras personas y tareas


module.exports = {
  reset: function () {
    tasks = {}; // esta función ya esta armada :D
  },
  // ==== COMPLETEN LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====
  listPeople: function () {
    // devuelve un arreglo de personas con tareas
    return tasks.people
  },
  add: function (name, task) {
    tasks.people.push(name)
    // guarda una tarea para una persona en particular
  }
  // etc.
};
