const animalController = require('../controllers/animalController');

module.exports = (app, upload) => {

     
    app.post('/api/animal/create', animalController.register);
  }