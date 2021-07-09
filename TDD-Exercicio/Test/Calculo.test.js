
const calculo = require('../lib/Calculos')

const calc = new calculo()

describe('Calculo', () => {
    test('Funcionario desenvolvedor salario maior que 3000', () => {
  
    expect(calc.Calc("desenvolvedor", 5000)).toBe(4000)
    
}); 



}); 