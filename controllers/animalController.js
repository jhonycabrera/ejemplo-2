const Animal = require('../models/animal');

module.exports = {
    register(req, res) {
        
        const animal = req.body;

        Animal.create(animal, (err, data) => {
            
            if(err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del animal',
                    eror: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'El registro se realize correctamente',
                data: data
            });
        });
    },

    
}