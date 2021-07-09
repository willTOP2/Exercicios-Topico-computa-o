
const calculo = require('../lib/Calculos')

const calc = new calculo()

describe('Calculo', () => {
    test('Funcionario desenvolvedor salario maior que 3000', () => {
  
    expect(calc.Calc("desenvolvedor", 5000)).toBe(4000)
    
}); 

test('Funcionario desenvolvedor salario menor que 3000', () => {
  
    expect(calc.Calc("desenvolvedor", 2500)).toBe(2250)
    
}); 


test('Funcionario DBA salario maior igual 2000', () => {
  
    expect(calc.Calc("DBA", 2500)).toBe(1875)
    
}); 


test('Funcionario DBA salario menor que 2000', () => {
  
    expect(calc.Calc("DBA", 1800)).toBe(1530)
    
}); 



test('Funcionario Testador salario maior igual 2000', () => {
  
    expect(calc.Calc("testador", 2500)).toBe(1875)
    
}); 


test('Funcionario Testador salario menor que 2000', () => {
  
    expect(calc.Calc("testador", 1800)).toBe(1530)
    
}); 

test('Funcionario Gerente salario maior igual 5000', () => {
  
    expect(calc.Calc("gerente", 5000)).toBe(3500)
    
}); 


test('Funcionario Gerente salario menor que 500', () => {
  
    expect(calc.Calc("gerente", 4000)).toBe(3200)
    
}); 





}); 