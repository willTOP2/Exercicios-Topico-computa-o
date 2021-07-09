
const calculo = require('../lib/Calculos')

const calc = new calculo()

describe('Calculadora Salario', () => {
    test('Funcionario desenvolvedor salario maior que 3000', () => {
  
    expect(calc.CalculoDev(5000)).toBe(4000)
    
}); 

test('Funcionario desenvolvedor salario menor que 3000', () => {
  
    expect(calc.CalculoDev(2800)).toBe(2520)
    
}); 




test('Funcionario DBA salario maior igual 2000', () => {
  
    expect(calc.CalculoDBA(2500)).toBe(1875)
    
}); 


test('Funcionario DBA salario menor que 2000', () => {
  
    expect(calc.CalculoDBA(1500)).toBe(1275)
    
}); 



test('Funcionario Testador salario maior igual 2000', () => {
  
    expect(calc.CalculoTestador(2500)).toBe(1875)
    
}); 


test('Funcionario Testador salario menor que 2000', () => {
  
    expect(calc.CalculoTestador(1500)).toBe(1275)
    
}); 

test('Funcionario Gerente salario maior igual 5000', () => {
  
    expect(calc.CalculoGerente(5000)).toBe(3500)
    
}); 


test('Funcionario Gerente salario menor que 5000', () => {
  
    expect(calc.CalculoGerente(4000)).toBe(3200)
    
}); 





}); 