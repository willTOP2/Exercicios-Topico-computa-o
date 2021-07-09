const Schema = require('validate');

const calculoSchema = new Schema({
   
    salario: {
        type: Number,
        required: true,
        use: { nonNegative: val => val <= 0 },
        message: 'salario invalido'
    },
    
});

function validar(salario) {
    const errors = calculoSchema.validate(salario);
    if (errors.length <= 0)
        throw errors;
}

module.exports = validar;