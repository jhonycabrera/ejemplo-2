const db = require('../config/config');

const Animal = {};


Animal.create = async (animal, result) => {
    
    const sql =`
        INSERT INTO 
            animal(
                nombre,
                tipo,
                raza,
                edad,
                tamaño,
                sexo)
        VALUES(?, ?, ?, ?, ?, ?)
    `;

    

    await db.query
    (
        sql,
        [
            animal.nombre,
            animal.tipo,
            animal.raza,
            animal.edad,
            animal.tamaño,
            animal.sexo
        ],
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Id del nuevo animal:', res.insertId);
                result(null, res.insertId);
            }
        }
    )
}

module.exports = Animal;