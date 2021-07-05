const Calculo = require('../lib/Calculo'); 

const calculo = new Calculo()

describe('Calculo', () => {
    test('Funcionario desenvolvedor salario maior que 3000', () => {
    
    expect(calculo.Calcular('Desenvolvedor', 5000)).toBe(4000)
    
}); 

test('Funcionario desenvolvedor salario menor que 3000', () => {
    
    expect(calculo.Calcular('Desenvolvedor', 2500)).toBe(2250)
    
}); 




}); 